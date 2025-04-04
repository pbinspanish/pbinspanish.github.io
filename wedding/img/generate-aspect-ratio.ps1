# Script generated by Copilot, modified and enhanced with help from these two threads:
# https://stackoverflow.com/questions/58033657/how-to-determine-jpg-image-orientation
# https://www.reddit.com/r/PowerShell/comments/9ile1g/noob_question_how_do_i_get_jpeg_dimensions/

[void][System.Reflection.Assembly]::LoadWithPartialName("System.Drawing")

# Specify the path to the folder containing the images
$folderPath = "J:\pbinspanish.hugo\static\wedding\img\afterparty\full"

# Get all image files in the folder
$imageFiles = Get-ChildItem -Path $folderPath -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|gif|bmp)$' }

# Initialize an empty array to store image data
$imageData = @()

# Calculate aspect ratio for each image
foreach ($file in $imageFiles) {
	$image = [System.Drawing.Bitmap]::FromFile($file.FullName)
	
	#Write-Output "$($file.FullName) $($image.Width) $($image.Height) $($image.GetPropertyItem(274).Value[0]) $($image.Width / $image.Height) $($image.Height / $image.Width) Date Taken: $([System.Text.Encoding]::UTF8.GetString($image.GetPropertyItem(36867).Value))"
	
	if ($image.GetPropertyItem(274).Value[0] -eq 1) {
		# Landscape image
		$aspectRatio = [Math]::Round($image.Width / $image.Height, 3)
	}
 	else {
		# Portrait image (invert the ratio)
		$aspectRatio = [Math]::Round($image.Height / $image.Width, 3)
	}
	$dateTaken = [System.Text.Encoding]::UTF8.GetString($image.GetPropertyItem(36867).Value).TrimEnd("`0")
	$dateTaken = [DateTime]::ParseExact($dateTaken, "yyyy:MM:dd HH:mm:ss", $null)
	$imageData += New-Object PSObject -Property @{
		filename    = $file.Name
		aspectRatio = $aspectRatio
		dateTaken   = $dateTaken
	}
	$image.Dispose()
}

$imageDataSorted = $imageData | Sort-Object -Property dateTaken

#$imageDataSorted | Format-Table -Property filename, aspectRatio, dateTaken

# Convert the data to JSON format
$jsonData = $imageDataSorted | ConvertTo-Json

# Output the JSON data
Write-Output $jsonData
