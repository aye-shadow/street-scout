package xyz.streetscout.aws.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import xyz.streetscout.exception.AwsException;

import java.io.InputStream;
import java.util.UUID;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class AwsS3Service {

    @Value("${aws.s3.bucket.name}")
    private String bucketName;

    private final AmazonS3 s3Client;

    public String saveImageToS3(MultipartFile photo) {

        try {

            String s3Filename = String.format("%s_%s", UUID.randomUUID(), photo.getOriginalFilename())
                    .replaceAll("[^a-zA-Z0-9.\\-]", "_")
                    .toLowerCase();

            InputStream inputStream = photo.getInputStream();

            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType(photo.getContentType());

            PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, s3Filename, inputStream, metadata);
            s3Client.putObject(putObjectRequest);
            return "https://" + bucketName + ".s3.amazonaws.com/" + s3Filename;

        } catch (Exception e) {
            throw new AwsException("Unable to upload image to s3 bucket", e);
        }
    }
}
