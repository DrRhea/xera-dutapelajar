@echo off
echo ========================================
echo Replacing Original Videos with Converted Versions
echo ========================================
echo.

cd public\video

echo Backing up original files to "originals" folder...
if not exist "originals" mkdir originals
move "DPRI_2026.mp4" "originals\" 2>nul
move "DPRI_Andra Galang Pratama.mp4" "originals\" 2>nul
move "DPRI_Congratulations.mp4" "originals\" 2>nul
move "DPRI_I Gusti Agung.mov" "originals\" 2>nul
move "DPRI_Kayla Adelia.mp4" "originals\" 2>nul
move "DPRI_Nadira Arunda.mp4" "originals\" 2>nul
move "DPRI_SMP.mp4" "originals\" 2>nul
move "DPRI_The Winners.mp4" "originals\" 2>nul

echo.
echo Renaming converted files...
ren "DPRI_2026_converted.mp4" "DPRI_2026.mp4" 2>nul
ren "DPRI_Andra Galang Pratama_converted.mp4" "DPRI_Andra Galang Pratama.mp4" 2>nul
ren "DPRI_Congratulations_converted.mp4" "DPRI_Congratulations.mp4" 2>nul
ren "DPRI_I Gusti Agung_converted.mp4" "DPRI_I Gusti Agung.mp4" 2>nul
ren "DPRI_Kayla Adelia_converted.mp4" "DPRI_Kayla Adelia.mp4" 2>nul
ren "DPRI_Nadira Arunda_converted.mp4" "DPRI_Nadira Arunda.mp4" 2>nul
ren "DPRI_SMP_converted.mp4" "DPRI_SMP.mp4" 2>nul
ren "DPRI_The Winners_converted.mp4" "DPRI_The Winners.mp4" 2>nul

echo.
echo ========================================
echo Complete!
echo ========================================
echo Original files backed up to: public\video\originals\
echo Converted files are now active.
echo.
pause
