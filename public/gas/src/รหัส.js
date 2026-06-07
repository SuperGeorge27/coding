function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Landing Page')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
