@echo off
echo ========================================
echo Converting Videos to H.264 MP4
echo ========================================
echo.

cd public\video

echo Converting DPRI_2026.mp4...
ffmpeg -i "DPRI_2026.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k "DPRI_2026_converted.mp4" -y

echo Converting DPRI_Andra Galang Pratama.mp4...
ffmpeg -i "DPRI_Andra Galang Pratama.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k "DPRI_Andra Galang Pratama_converted.mp4" -y

echo Converting DPRI_Congratulations.mp4...
ffmpeg -i "DPRI_Congratulations.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k "DPRI_Congratulations_converted.mp4" -y

echo Converting DPRI_I Gusti Agung.mov...
ffmpeg -i "DPRI_I Gusti Agung.mov" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k "DPRI_I Gusti Agung_converted.mp4" -y

echo Converting DPRI_Kayla Adelia.mp4...
ffmpeg -i "DPRI_Kayla Adelia.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k "DPRI_Kayla Adelia_converted.mp4" -y

echo Converting DPRI_Nadira Arunda.mp4...
ffmpeg -i "DPRI_Nadira Arunda.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k "DPRI_Nadira Arunda_converted.mp4" -y

echo Converting DPRI_SMP.mp4...
ffmpeg -i "DPRI_SMP.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k "DPRI_SMP_converted.mp4" -y

echo Converting DPRI_The Winners.mp4...
ffmpeg -i "DPRI_The Winners.mp4" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k "DPRI_The Winners_converted.mp4" -y

echo.
echo ========================================
echo Conversion Complete!
echo ========================================
echo.
echo Files have been converted with "_converted" suffix.
echo You can now replace the original files.
echo.
pause
