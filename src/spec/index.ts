export const spec = `openapi: 3.0.0
info:
  title: Images playground API
  description: Images playground API
  termsOfService: https://terms.com/terms-of-service/resource.json
  contact:
    name: szz_dev
    url: https://github.com/szz-dvl
    email: santiaguzz@gmail.com
  version: "1"
servers:
  - description: Local server
    url: http://localhost:3000
components:
  schemas:
    UnexpectedError:
      type: object
      properties:
        success:
          type: boolean
        message:
          type: string
      additionalProperties: false
paths:
  /: 
    summary: Serve static files, the client application
    description: Serve static files, the client application
    get:
      tags:
        - application
      summary: Serve static files, the client application
      description: Serve static files, the client application
      operationId: getBundle
      responses:
        "200":
          description: A bundle with the client application 
          content:
            text/html:
              schema:
                type: string
        default:
          description: Unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/UnexpectedError"
      deprecated: false
  /{file}: 
    summary: Serve static files, the client application
    description: Serve static files, the client application
    get:
      tags:
        - application
      summary: Serve static files, the client application
      description: Serve static files, the client application
      operationId: getBundle
      responses:
        "200":
          description: A bundle with the client application 
          content:
            text/html:
              schema:
                type: string
        default:
          description: Unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/UnexpectedError"
      deprecated: false
  /static/js/{file}: 
    summary: Serve static files, the client application
    description: Serve static files, the client application
    get:
      tags:
        - application
      summary: Serve static files, the client application
      description: Serve static files, the client application
      operationId: getBundle
      responses:
        "200":
          description: A bundle with the client application 
          content:
            text/html:
              schema:
                type: string
        default:
          description: Unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/UnexpectedError"
      deprecated: false
  /static/css/{file}: 
    summary: Serve static files, the client application
    description: Serve static files, the client application
    get:
      tags:
        - application
      summary: Serve static files, the client application
      description: Serve static files, the client application
      operationId: getBundle
      responses:
        "200":
          description: A bundle with the client application 
          content:
            text/html:
              schema:
                type: string
        default:
          description: Unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/UnexpectedError"
      deprecated: false
  /image/{dir}/{size}/{file}:
    summary: Request an image
    description: Request an image
    get:
      tags:
        - image
      summary: Request an image
      description: Request an image
      operationId: image
      parameters:
        - in: path
          name: dir
          schema:
            type: string
            pattern: '^.*$'
          required: true
        - in: path
          name: size
          schema:
            type: string
            pattern: '^\\d+x{1}|x{1}\\d+|\\d+x{1}\\d+$'
          required: true
        - in: path
          name: file
          schema:
            type: string
            pattern: '^.*$'
          required: true
        - in: query
          name: create.width
          schema:
            type: number
        - in: query
          name: create.height
          schema:
            type: number
        - in: query
          name: create.channels
          schema:
            type: number
        - in: query
          name: create.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: create.noise.type
          schema:
            type: string
            enum:
              - gaussian
        - in: query
          name: create.noise.mean
          schema:
            type: number
        - in: query
          name: create.noise.sigma
          schema:
            type: number
        - in: query
          name: text.width
          schema:
            type: number
        - in: query
          name: text.height
          schema:
            type: number
        - in: query
          name: text.text
          schema:
            type: string
        - in: query
          name: text.font
          schema:
            type: string
        - in: query
          name: text.fontfile
          schema:
            type: string
        - in: query
          name: text.align
          schema:
            type: string
            enum:
              - left
              - center
              - right
        - in: query
          name: text.justify
          schema:
            type: boolean
        - in: query
          name: text.dpi
          schema:
            type: number
        - in: query
          name: text.spacing
          schema:
            type: number
        - in: query
          name: text.wrap
          schema:
            type: string
            enum:
              - word
              - word-char
              - char
              - none
        - in: query
          name: text.rgba
          schema:
            type: boolean              
        - in: query
          name: resize.width
          schema:
            type: number
        - in: query
          name: resize.height
          schema:
            type: number
        - in: query
          name: resize.fit
          schema:
            type: string
            enum:
              - cover
              - contain
              - fill
              - inside
              - outside
        - in: query
          name: resize.position
          schema:
            type: string
            enum:
              - top
              - right top
              - right
              - right bottom
              - bottom
              - left bottom
              - left
              - left top
        - in: query
          name: resize.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: resize.kernel
          schema:
            type: string
            enum:
              - nearest
              - linear
              - cubic
              - mitchell
              - lanczos2
              - lanczos3
        - in: query
          name: resize.withoutEnlargement
          schema:
            type: boolean
        - in: query
          name: resize.withoutReduction
          schema:
            type: boolean
        - in: query
          name: resize.fastShrinkOnLoad
          schema:
            type: boolean
        - in: query
          name: extend
          schema:
            type: number
        - in: query
          name: extend.top
          schema:
            type: number
        - in: query
          name: extend.left
          schema:
            type: number
        - in: query
          name: extend.bottom
          schema:
            type: number
        - in: query
          name: extend.right
          schema:
            type: number
        - in: query
          name: extend.extendWith
          schema:
            type: string
            enum:
              - background
              - copy
              - repeat
              - mirror
        - in: query
          name: extend.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: extract.top
          schema:
            type: number
        - in: query
          name: extract.left
          schema:
            type: number
        - in: query
          name: extract.width
          schema:
            type: number
        - in: query
          name: extract.height
          schema:
            type: number
        - in: query
          name: extractAfter.top
          schema:
            type: number
        - in: query
          name: extractAfter.left
          schema:
            type: number
        - in: query
          name: extractAfter.width
          schema:
            type: number
        - in: query
          name: extractAfter.height
          schema:
            type: number
        - in: query
          name: trim
          schema:
            type: boolean
        - in: query
          name: trim.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: trim.threshold
          schema:
            type: number
        - in: query
          name: trim.lineArt
          schema:
            type: boolean
        - in: query
          name: rotate
          schema:
            type: number
        - in: query
          name: rotate.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: rotateAfter
          schema:
            type: number
        - in: query
          name: rotateAfter.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: flip
          schema:
            type: boolean
        - in: query
          name: flop
          schema:
            type: boolean
        - in: query
          name: affine
          schema:
            type: array
            items:
              type: number
            maxItems: 4
            minItems: 4
        - in: query
          name: affine.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: affine.idx
          schema:
            type: number
        - in: query
          name: affine.idy
          schema:
            type: number
        - in: query
          name: affine.odx
          schema:
            type: number
        - in: query
          name: affine.ody
          schema:
            type: number
        - in: query
          name: affine.interpolator
          schema:
            type: string
            enum:
              - nearest
              - bilinear
              - bicubic
              - lbb
              - nohalo
              - vsqbs
        - in: query
          name: sharpen
          schema:
            type: boolean
        - in: query
          name: sharpen.sigma
          schema:
            type: number
        - in: query
          name: sharpen.m1
          schema:
            type: number
            minimum: 0
            maximum: 1000000
        - in: query
          name: sharpen.m2
          schema:
            type: number
            minimum: 0
            maximum: 1000000
        - in: query
          name: sharpen.x1
          schema:
            type: number
            minimum: 0
            maximum: 1000000
        - in: query
          name: sharpen.y2
          schema:
            type: number
            minimum: 0
            maximum: 1000000
        - in: query
          name: sharpen.y3
          schema:
            type: number
            minimum: 0
            maximum: 1000000
        - in: query
          name: median
          schema:
            type: number
        - in: query
          name: blur
          schema:
            type: number
            minimum: .3
            maximum: 1000
        - in: query
          name: flatten
          schema:
            type: boolean
        - in: query
          name: flatten.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: unflatten
          schema:
            type: boolean
        - in: query
          name: gamma
          schema:
            oneOf:
              - type: number
                minimum: 1
                maximum: 3
              - type: array
                items:
                  type: number
                  minimum: 1
                  maximum: 3
                maxItems: 2
                minItems: 2
        - in: query
          name: negate
          schema:
            type: boolean
        - in: query
          name: negate.alpha
          schema:
            type: boolean
        - in: query
          name: normalise
          schema:
            type: boolean
        - in: query
          name: normalise.upper
          schema:
            type: number
            minimum: 1
            maximum: 99
        - in: query
          name: normalise.lower
          schema:
            type: number
            minimum: 1
            maximum: 99
        - in: query
          name: normalize
          schema:
            type: boolean
        - in: query
          name: normalize.upper
          schema:
            type: number
            minimum: 1
            maximum: 99
        - in: query
          name: normalize.lower
          schema:
            type: number
            minimum: 1
            maximum: 99
        - in: query
          name: clahe.width
          schema:
            type: number
        - in: query
          name: clahe.height
          schema:
            type: number
        - in: query
          name: clahe.maxSlope
          schema:
            type: number
            minimum: 0
            maximum: 100
        - in: query
          name: convolve.width
          schema:
            type: number
        - in: query
          name: convolve.height
          schema:
            type: number
        - in: query
          name: convolve.kernel
          schema:
            type: array
            items:
              type: number
        - in: query
          name: convolve.scale
          schema:
            type: number
        - in: query
          name: convolve.offset
          schema:
            type: number
        - in: query
          name: threshold
          schema:
            type: number
            minimum: 0
            maximum: 255
        - in: query
          name: threshold.greyscale
          schema:
            type: boolean
        - in: query
          name: threshold.grayscale
          schema:
            type: boolean
        - in: query
          name: boolean.operand
          schema:
            type: string
        - in: query
          name: boolean.operator
          schema:
            type: string
            enum:
              - and
              - or
              - eor
        - in: query
          name: linear.a
          schema:
            oneOf:
              - type: number
              - type: array
                items:
                  type: number
        - in: query
          name: linear.b
          schema:
            oneOf:
              - type: number
              - type: array
                items:
                  type: number
        - in: query
          name: recomb.0
          schema:
            type: array
            items:
              type: number
            maxItems: 3
            minItems: 3
        - in: query
          name: recomb.1
          schema:
            type: array
            items:
              type: number
            maxItems: 3
            minItems: 3
        - in: query
          name: recomb.2
          schema:
            type: array
            items:
              type: number
            maxItems: 3
            minItems: 3
        - in: query
          name: modulate.brightness
          schema:
            type: number
        - in: query
          name: modulate.saturation
          schema:
            type: number
        - in: query
          name: modulate.hue
          schema:
            type: number
        - in: query
          name: modulate.lightness
          schema:
            type: number
        - in: query
          name: tint
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: greyscale
          schema:
            type: boolean
        - in: query
          name: grayscale
          schema:
            type: boolean
        - in: query
          name: pipelineColorspace
          schema:
            type: string
            enum:
              - multiband
              - b-w
              - histogram
              - xyz
              - lab
              - cmyk
              - labq
              - rgb
              - cmc
              - lch
              - labs
              - srgb
              - yxy
              - fourier
              - rgb16
              - grey16
              - matrix
              - scrgb
              - hsv
        - in: query
          name: pipelineColourspace
          schema:
            type: string
            enum:
              - multiband
              - b-w
              - histogram
              - xyz
              - lab
              - cmyk
              - labq
              - rgb
              - cmc
              - lch
              - labs
              - srgb
              - yxy
              - fourier
              - rgb16
              - grey16
              - matrix
              - scrgb
              - hsv
        - in: query
          name: toColorspace
          schema:
            type: string
            enum:
              - multiband
              - b-w
              - histogram
              - xyz
              - lab
              - cmyk
              - labq
              - rgb
              - cmc
              - lch
              - labs
              - srgb
              - yxy
              - fourier
              - rgb16
              - grey16
              - matrix
              - scrgb
              - hsv
        - in: query
          name: toColourspace
          schema:
            type: string
            enum:
              - multiband
              - b-w
              - histogram
              - xyz
              - lab
              - cmyk
              - labq
              - rgb
              - cmc
              - lch
              - labs
              - srgb
              - yxy
              - fourier
              - rgb16
              - grey16
              - matrix
              - scrgb
              - hsv
        - in: query
          name: removeAlpha
          schema:
            type: boolean
        - in: query
          name: ensureAlpha
          schema:
            type: number
            minimum: 0
            maximum: 1
        - in: query
          name: extractChannel
          schema:
            type: string
            enum:
              - "0"
              - "1"
              - "2"
              - "3"
              - red
              - green
              - blue
              - alpha
        - in: query
          name: joinChannel
          schema:
            oneOf:
              - type: string
              - type: array
                items:
                  type: string
        - in: query
          name: bandbool
          schema:
            type: string
            enum:
              - and
              - or
              - eor
        - in: query
          name: custom
          schema:
            type: string
        - in: query
          name: customAfter
          schema:
            type: string
        - in: query
          name: composite.0
          schema:
            type: string         
        - in: query
          name: composite.0.blend
          schema:
            type: string
            enum: 
              - clear 
              - source 
              - over 
              - in
              - out 
              - atop
              - dest 
              - dest-over 
              - dest-in 
              - dest-out 
              - dest-atop 
              - xor 
              - add
              - saturate 
              - multiply 
              - screen 
              - overlay
              - darken 
              - lighten 
              - colour-dodge 
              - color-dodge 
              - colour-burn 
              - color-burn 
              - hard-light 
              - soft-light 
              - difference 
              - exclusion
        - in: query
          name: composite.0.gravity
          schema:
            type: string
            enum: 
              - center
        - in: query
          name: composite.0.create.top
          schema:
            type: number
        - in: query
          name: composite.0.create.left
          schema:
            type: number
        - in: query
          name: composite.0.create.density
          schema:
            type: number
        - in: query
          name: composite.0.create.tile
          schema:
            type: boolean
        - in: query
          name: composite.0.create.premultiplied
          schema:
            type: boolean
        - in: query
          name: composite.0.create.width
          schema:
            type: number
        - in: query
          name: composite.0.create.height
          schema:
            type: number
        - in: query
          name: composite.0.create.channels
          schema:
            type: number
        - in: query
          name: composite.0.create.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: composite.0.create.noise.type
          schema:
            type: string
            enum:
              - gaussian
        - in: query
          name: composite.0.create.noise.mean
          schema:
            type: number
        - in: query
          name: composite.0.create.noise.sigma
          schema:
            type: number
        - in: query
          name: composite.0.text.width
          schema:
            type: number
        - in: query
          name: composite.0.text.height
          schema:
            type: number
        - in: query
          name: composite.0.text.text
          schema:
            type: string
        - in: query
          name: composite.0.text.font
          schema:
            type: string
        - in: query
          name: composite.0.text.fontfile
          schema:
            type: string
        - in: query
          name: composite.0.text.align
          schema:
            type: string
            enum:
              - left
              - center
              - right
        - in: query
          name: composite.0.text.justify
          schema:
            type: boolean
        - in: query
          name: composite.0.text.dpi
          schema:
            type: number
        - in: query
          name: composite.0.text.spacing
          schema:
            type: number
        - in: query
          name: composite.0.text.wrap
          schema:
            type: string
            enum:
              - word
              - word-char
              - char
              - none
        - in: query
          name: composite.0.text.rgba
          schema:
            type: boolean
      responses:
        "200":
          description: Image not modified
          content:
            application/octet-stream:
              schema:
                type: string
                format: binary
        "201":
          description: Image converted
          content:
            application/octet-stream:
              schema:
                type: string
                format: binary
        "202":
          description: Cached image
          content:
            application/octet-stream:
              schema:
                type: string
                format: binary
        "404":
          description: Image not found
          content:
            application/json:
              schema:
                type: object
                properties:
                  success: 
                    type: boolean
                  message: 
                    type: string
        "400":
          description: Bad parameters
          content:
            application/json:
              schema:
                type: object
                properties:
                  success: 
                    type: boolean
                  message: 
                    type: string
        default:
          description: Unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/UnexpectedError"
      deprecated: false
  /image/{size}/{file}:
    summary: Request an image
    description: Request an image
    get:
      tags:
        - image
      summary: Request an image
      description: Request an image
      operationId: image
      parameters:
        - in: path
          name: size
          schema:
            type: string
            pattern: '^\\d+x{1}|x{1}\\d+|\\d+x{1}\\d+$'
          required: true
        - in: path
          name: file
          schema:
            type: string
            pattern: '^.*$'
          required: true
        - in: query
          name: create.width
          schema:
            type: number
        - in: query
          name: create.height
          schema:
            type: number
        - in: query
          name: create.channels
          schema:
            type: number
        - in: query
          name: create.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: create.noise.type
          schema:
            type: string
            enum:
              - gaussian
        - in: query
          name: create.noise.mean
          schema:
            type: number
        - in: query
          name: create.noise.sigma
          schema:
            type: number
        - in: query
          name: text.width
          schema:
            type: number
        - in: query
          name: text.height
          schema:
            type: number
        - in: query
          name: text.text
          schema:
            type: string
        - in: query
          name: text.font
          schema:
            type: string
        - in: query
          name: text.fontfile
          schema:
            type: string
        - in: query
          name: text.align
          schema:
            type: string
            enum:
              - left
              - center
              - right
        - in: query
          name: text.justify
          schema:
            type: boolean
        - in: query
          name: text.dpi
          schema:
            type: number
        - in: query
          name: text.spacing
          schema:
            type: number
        - in: query
          name: text.wrap
          schema:
            type: string
            enum:
              - word
              - word-char
              - char
              - none
        - in: query
          name: text.rgba
          schema:
            type: boolean              
        - in: query
          name: resize.width
          schema:
            type: number
        - in: query
          name: resize.height
          schema:
            type: number
        - in: query
          name: resize.fit
          schema:
            type: string
            enum:
              - cover
              - contain
              - fill
              - inside
              - outside
        - in: query
          name: resize.position
          schema:
            type: string
            enum:
              - top
              - right top
              - right
              - right bottom
              - bottom
              - left bottom
              - left
              - left top
        - in: query
          name: resize.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: resize.kernel
          schema:
            type: string
            enum:
              - nearest
              - linear
              - cubic
              - mitchell
              - lanczos2
              - lanczos3
        - in: query
          name: resize.withoutEnlargement
          schema:
            type: boolean
        - in: query
          name: resize.withoutReduction
          schema:
            type: boolean
        - in: query
          name: resize.fastShrinkOnLoad
          schema:
            type: boolean
        - in: query
          name: extend
          schema:
            type: number
        - in: query
          name: extend.top
          schema:
            type: number
        - in: query
          name: extend.left
          schema:
            type: number
        - in: query
          name: extend.bottom
          schema:
            type: number
        - in: query
          name: extend.right
          schema:
            type: number
        - in: query
          name: extend.extendWith
          schema:
            type: string
            enum:
              - background
              - copy
              - repeat
              - mirror
        - in: query
          name: extend.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: extract.top
          schema:
            type: number
        - in: query
          name: extract.left
          schema:
            type: number
        - in: query
          name: extract.width
          schema:
            type: number
        - in: query
          name: extract.height
          schema:
            type: number
        - in: query
          name: extractAfter.top
          schema:
            type: number
        - in: query
          name: extractAfter.left
          schema:
            type: number
        - in: query
          name: extractAfter.width
          schema:
            type: number
        - in: query
          name: extractAfter.height
          schema:
            type: number
        - in: query
          name: trim
          schema:
            type: boolean
        - in: query
          name: trim.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: trim.threshold
          schema:
            type: number
        - in: query
          name: trim.lineArt
          schema:
            type: boolean
        - in: query
          name: rotate
          schema:
            type: number
        - in: query
          name: rotate.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: rotateAfter
          schema:
            type: number
        - in: query
          name: rotateAfter.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: flip
          schema:
            type: boolean
        - in: query
          name: flop
          schema:
            type: boolean
        - in: query
          name: affine
          schema:
            type: array
            items:
              type: number
            maxItems: 4
            minItems: 4
        - in: query
          name: affine.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: affine.idx
          schema:
            type: number
        - in: query
          name: affine.idy
          schema:
            type: number
        - in: query
          name: affine.odx
          schema:
            type: number
        - in: query
          name: affine.ody
          schema:
            type: number
        - in: query
          name: affine.interpolator
          schema:
            type: string
            enum:
              - nearest
              - bilinear
              - bicubic
              - lbb
              - nohalo
              - vsqbs
        - in: query
          name: sharpen
          schema:
            type: boolean
        - in: query
          name: sharpen.sigma
          schema:
            type: number
        - in: query
          name: sharpen.m1
          schema:
            type: number
            minimum: 0
            maximum: 1000000
        - in: query
          name: sharpen.m2
          schema:
            type: number
            minimum: 0
            maximum: 1000000
        - in: query
          name: sharpen.x1
          schema:
            type: number
            minimum: 0
            maximum: 1000000
        - in: query
          name: sharpen.y2
          schema:
            type: number
            minimum: 0
            maximum: 1000000
        - in: query
          name: sharpen.y3
          schema:
            type: number
            minimum: 0
            maximum: 1000000
        - in: query
          name: median
          schema:
            type: number
        - in: query
          name: blur
          schema:
            type: number
            minimum: .3
            maximum: 1000
        - in: query
          name: flatten
          schema:
            type: boolean
        - in: query
          name: flatten.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: unflatten
          schema:
            type: boolean
        - in: query
          name: gamma
          schema:
            oneOf:
              - type: number
                minimum: 1
                maximum: 3
              - type: array
                items:
                  type: number
                  minimum: 1
                  maximum: 3
                maxItems: 2
                minItems: 2
        - in: query
          name: negate
          schema:
            type: boolean
        - in: query
          name: negate.alpha
          schema:
            type: boolean
        - in: query
          name: normalise
          schema:
            type: boolean
        - in: query
          name: normalise.upper
          schema:
            type: number
            minimum: 1
            maximum: 99
        - in: query
          name: normalise.lower
          schema:
            type: number
            minimum: 1
            maximum: 99
        - in: query
          name: normalize
          schema:
            type: boolean
        - in: query
          name: normalize.upper
          schema:
            type: number
            minimum: 1
            maximum: 99
        - in: query
          name: normalize.lower
          schema:
            type: number
            minimum: 1
            maximum: 99
        - in: query
          name: clahe.width
          schema:
            type: number
        - in: query
          name: clahe.height
          schema:
            type: number
        - in: query
          name: clahe.maxSlope
          schema:
            type: number
            minimum: 0
            maximum: 100
        - in: query
          name: convolve.width
          schema:
            type: number
        - in: query
          name: convolve.height
          schema:
            type: number
        - in: query
          name: convolve.kernel
          schema:
            type: array
            items:
              type: number
        - in: query
          name: convolve.scale
          schema:
            type: number
        - in: query
          name: convolve.offset
          schema:
            type: number
        - in: query
          name: threshold
          schema:
            type: number
            minimum: 0
            maximum: 255
        - in: query
          name: threshold.greyscale
          schema:
            type: boolean
        - in: query
          name: threshold.grayscale
          schema:
            type: boolean
        - in: query
          name: boolean.operand
          schema:
            type: string
        - in: query
          name: boolean.operator
          schema:
            type: string
            enum:
              - and
              - or
              - eor
        - in: query
          name: linear.a
          schema:
            oneOf:
              - type: number
              - type: array
                items:
                  type: number
        - in: query
          name: linear.b
          schema:
            oneOf:
              - type: number
              - type: array
                items:
                  type: number
        - in: query
          name: recomb.0
          schema:
            type: array
            items:
              type: number
            maxItems: 3
            minItems: 3
        - in: query
          name: recomb.1
          schema:
            type: array
            items:
              type: number
            maxItems: 3
            minItems: 3
        - in: query
          name: recomb.2
          schema:
            type: array
            items:
              type: number
            maxItems: 3
            minItems: 3
        - in: query
          name: modulate.brightness
          schema:
            type: number
        - in: query
          name: modulate.saturation
          schema:
            type: number
        - in: query
          name: modulate.hue
          schema:
            type: number
        - in: query
          name: modulate.lightness
          schema:
            type: number
        - in: query
          name: tint
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: greyscale
          schema:
            type: boolean
        - in: query
          name: grayscale
          schema:
            type: boolean
        - in: query
          name: pipelineColorspace
          schema:
            type: string
            enum:
              - multiband
              - b-w
              - histogram
              - xyz
              - lab
              - cmyk
              - labq
              - rgb
              - cmc
              - lch
              - labs
              - srgb
              - yxy
              - fourier
              - rgb16
              - grey16
              - matrix
              - scrgb
              - hsv
        - in: query
          name: pipelineColourspace
          schema:
            type: string
            enum:
              - multiband
              - b-w
              - histogram
              - xyz
              - lab
              - cmyk
              - labq
              - rgb
              - cmc
              - lch
              - labs
              - srgb
              - yxy
              - fourier
              - rgb16
              - grey16
              - matrix
              - scrgb
              - hsv
        - in: query
          name: toColorspace
          schema:
            type: string
            enum:
              - multiband
              - b-w
              - histogram
              - xyz
              - lab
              - cmyk
              - labq
              - rgb
              - cmc
              - lch
              - labs
              - srgb
              - yxy
              - fourier
              - rgb16
              - grey16
              - matrix
              - scrgb
              - hsv
        - in: query
          name: toColourspace
          schema:
            type: string
            enum:
              - multiband
              - b-w
              - histogram
              - xyz
              - lab
              - cmyk
              - labq
              - rgb
              - cmc
              - lch
              - labs
              - srgb
              - yxy
              - fourier
              - rgb16
              - grey16
              - matrix
              - scrgb
              - hsv
        - in: query
          name: removeAlpha
          schema:
            type: boolean
        - in: query
          name: ensureAlpha
          schema:
            type: number
            minimum: 0
            maximum: 1
        - in: query
          name: extractChannel
          schema:
            type: string
            enum:
              - "0"
              - "1"
              - "2"
              - "3"
              - red
              - green
              - blue
              - alpha
        - in: query
          name: joinChannel
          schema:
            oneOf:
              - type: string
              - type: array
                items:
                  type: string
        - in: query
          name: bandbool
          schema:
            type: string
            enum:
              - and
              - or
              - eor
        - in: query
          name: custom
          schema:
            type: string
        - in: query
          name: customAfter
          schema:
            type: string
        - in: query
          name: composite.0
          schema:
            type: string         
        - in: query
          name: composite.0.blend
          schema:
            type: string
            enum: 
              - clear 
              - source 
              - over 
              - in
              - out 
              - atop
              - dest 
              - dest-over 
              - dest-in 
              - dest-out 
              - dest-atop 
              - xor 
              - add
              - saturate 
              - multiply 
              - screen 
              - overlay
              - darken 
              - lighten 
              - colour-dodge 
              - color-dodge 
              - colour-burn 
              - color-burn 
              - hard-light 
              - soft-light 
              - difference 
              - exclusion
        - in: query
          name: composite.0.gravity
          schema:
            type: string
            enum: 
              - center
        - in: query
          name: composite.0.create.top
          schema:
            type: number
        - in: query
          name: composite.0.create.left
          schema:
            type: number
        - in: query
          name: composite.0.create.density
          schema:
            type: number
        - in: query
          name: composite.0.create.tile
          schema:
            type: boolean
        - in: query
          name: composite.0.create.premultiplied
          schema:
            type: boolean
        - in: query
          name: composite.0.create.width
          schema:
            type: number
        - in: query
          name: composite.0.create.height
          schema:
            type: number
        - in: query
          name: composite.0.create.channels
          schema:
            type: number
        - in: query
          name: composite.0.create.background
          schema:
            type: string
            pattern: '^#[0-9A-F]{6}$'
        - in: query
          name: composite.0.create.noise.type
          schema:
            type: string
            enum:
              - gaussian
        - in: query
          name: composite.0.create.noise.mean
          schema:
            type: number
        - in: query
          name: composite.0.create.noise.sigma
          schema:
            type: number
        - in: query
          name: composite.0.text.width
          schema:
            type: number
        - in: query
          name: composite.0.text.height
          schema:
            type: number
        - in: query
          name: composite.0.text.text
          schema:
            type: string
        - in: query
          name: composite.0.text.font
          schema:
            type: string
        - in: query
          name: composite.0.text.fontfile
          schema:
            type: string
        - in: query
          name: composite.0.text.align
          schema:
            type: string
            enum:
              - left
              - center
              - right
        - in: query
          name: composite.0.text.justify
          schema:
            type: boolean
        - in: query
          name: composite.0.text.dpi
          schema:
            type: number
        - in: query
          name: composite.0.text.spacing
          schema:
            type: number
        - in: query
          name: composite.0.text.wrap
          schema:
            type: string
            enum:
              - word
              - word-char
              - char
              - none
        - in: query
          name: composite.0.text.rgba
          schema:
            type: boolean
      responses:
        "200":
          description: Image not modified
          content:
            application/octet-stream:
              schema:
                type: string
                format: binary
        "201":
          description: Image converted
          content:
            application/octet-stream:
              schema:
                type: string
                format: binary
        "202":
          description: Cached image
          content:
            application/octet-stream:
              schema:
                type: string
                format: binary
        "404":
          description: Image not found
          content:
            application/json:
              schema:
                type: object
                properties:
                  success: 
                    type: boolean
                  message: 
                    type: string
        "400":
          description: Bad parameters
          content:
            application/json:
              schema:
                type: object
                properties:
                  success: 
                    type: boolean
                  message: 
                    type: string
        default:
          description: Unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/UnexpectedError"
      deprecated: false
  /image:
    post:
      tags:
        - image
      summary: Upload an image
      description: Upload an image
      operationId: image
      requestBody:
        description: Image to be created
        required: true
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                image:
                  type: string
                  format: binary
      responses:
        "200":
          description: Image saved successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  success: 
                    type: boolean
                  image: 
                    type: string
                    format: url
        "400":
          description: Bad request
          content:
            application/json:
              schema:
                type: object
                properties:
                  success: 
                    type: boolean
                  message: 
                    type: string
        default:
          description: Unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/UnexpectedError"
      deprecated: false
tags:
  - name: image
    description: Enpoints for images`