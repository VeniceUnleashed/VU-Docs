---
title: DebugRenderer (Client Library)
---
## Description

## Methods

| Type | Name                      | Parameters                                                                                                                                                                           |
| ---- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| void | [DrawSphere](#drawsphere) | [Vec3](/vext/ref/cls/shr/vec3) **pos**, float **radius**, [Vec4](/vext/ref/cls/shr/vec4) **color**, bool **renderLines**, bool **smallSizeSegmentDecrease**                    |
| void | [DrawLine](#drawline)     | [Vec3](/vext/ref/cls/shr/vec3) **from**, [Vec3](/vext/ref/cls/shr/vec3) **to**, [Vec4](/vext/ref/cls/shr/vec4) **colorFrom**, [Vec4](/vext/ref/cls/shr/vec4) **colorTo** |
| void | [DrawLine2D](#drawline2d) | [Vec2](/vext/ref/cls/shr/vec2) **from**, [Vec2](/vext/ref/cls/shr/vec2) **to**, [Vec4](/vext/ref/cls/shr/vec4) **color**                                                    |
| void | [DrawText2D](#drawtext2d) | int **x**, int **y**, string **text**, [Vec4](/vext/ref/cls/shr/vec4) **color**, float **scale**                                                                                  |

### DrawSphere

> void **DrawSphere**([Vec3](/vext/ref/cls/shr/vec3) **pos**, float **radius**, [Vec4](/vext/ref/cls/shr/vec4) **color**, bool **renderLines**, bool **smallSizeSegmentDecrease**)

#### Parameters

| Name                     | Type                              | Description |
| ------------------------ | --------------------------------- | ----------- |
| pos                      | [Vec3](/vext/ref/cls/shr/vec3) |             |
| radius                   | float                             |             |
| color                    | [Vec4](/vext/ref/cls/shr/vec4) |             |
| renderLines              | bool                              |             |
| smallSizeSegmentDecrease | bool                              |             |

### DrawLine

> void **DrawLine**([Vec3](/vext/ref/cls/shr/vec3) **from**, [Vec3](/vext/ref/cls/shr/vec3) **to**, [Vec4](/vext/ref/cls/shr/vec4) **colorFrom**, [Vec4](/vext/ref/cls/shr/vec4) **colorTo**)

#### Parameters

| Name      | Type                              | Description |
| --------- | --------------------------------- | ----------- |
| from      | [Vec3](/vext/ref/cls/shr/vec3) |             |
| to        | [Vec3](/vext/ref/cls/shr/vec3) |             |
| colorFrom | [Vec4](/vext/ref/cls/shr/vec4) |             |
| colorTo   | [Vec4](/vext/ref/cls/shr/vec4) |             |

### DrawLine2D

> void **DrawLine2D**([Vec2](/vext/ref/cls/shr/vec2) **from**, [Vec2](/vext/ref/cls/shr/vec2) **to**, [Vec4](/vext/ref/cls/shr/vec4) **color**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| from  | [Vec2](/vext/ref/cls/shr/vec2) |             |
| to    | [Vec2](/vext/ref/cls/shr/vec2) |             |
| color | [Vec4](/vext/ref/cls/shr/vec4) |             |

### DrawText2D

> void **DrawText2D**(int **x**, int **y**, string **text**, [Vec4](/vext/ref/cls/shr/vec4) **color**, float **scale**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| x     | int                               |             |
| y     | int                               |             |
| text  | string                            |             |
| color | [Vec4](/vext/ref/cls/shr/vec4) |             |
| scale | float                             |             |
