class Creative {
  /**
   * id of the creative is optional. It has to be unique, and is mainly use for database
   */
  id?: string;

  /**
   * name of the creative. This must be unique within a campaign
   */
  name: string;

  /**
   * type of the creative. This doesn't go into detail.
   * It can be used to determine which kind of html tag is needed to display the creative
   */
  type: CreativeType; 

  /**
   * format of the creative. This gived more detail about the type of the creative.
   * It can be used to apply export settings
   * This is optional, because it can be determined by the type in some cases
   */
  format?: CreativeFormat;

  /**
   * Default width in px. Use 1 for responsive in width
   */ 
  width: number;

  /**
   * Default width in px. Use 1 for responsive in height
   */ 
  height: number;

  /**
   * The maximum file size in bytes. This is used to determine if the creative is too big to be uploaded.
   */
  maxFileSize?: number;

  /**
   * The current file size in bytes. 
   */
  fileSize: number;

  get dimensions(): string {
    return [this.width, this.height].join(Creative.DIMENSIONS_SEPARATOR);
  }

  set dimensions(dimensions: string) {
    const [width, height] = dimensions.split(Creative.DIMENSIONS_SEPARATOR);
    this.width = parseInt(width, 10);
    this.height = parseInt(height, 10);
  }

  /**
   * Define which character is used to separate the width and height in a dimensions string.
   * At Bannerboy, we've been using "x", which is easy to type.
   * However, the multiplication sign "×" would be more accurate.
   */
  static DIMENSIONS_SEPARATOR = 'x';
  // static DIMENSIONS_SEPARATOR = '×';
}

class HTMLCreative extends Creative {
  clickTag: string;

  /**
   * Previously known as "platform"
   */
  adserver: string;

  fallback: File|string;

  // get fallbackFileSize(): number {
  //   return this.fileSize;
  // }
}

type CreativeType = 'html' | 'image' | 'video' | 'photoshop';

type CreativeFormat = 'html' | 'jpg' | 'png' | 'gif' | 'mp4' | 'mov' | 'psd';