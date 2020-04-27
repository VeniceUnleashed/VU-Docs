---
title: DebugRenderer
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[DrawLine](#drawline)**(from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), colorFrom: [Vec4](/vext/ref/shared/type/vec4), colorTo: [Vec4](/vext/ref/shared/type/vec4)) | void |
| **[DrawTriangle](#drawtriangle)**(pos1: [Vec3](/vext/ref/shared/type/vec3), pos2: [Vec3](/vext/ref/shared/type/vec3), pos3: [Vec3](/vext/ref/shared/type/vec3), color1: [Vec4](/vext/ref/shared/type/vec4), color2: [Vec4](/vext/ref/shared/type/vec4), color3: [Vec4](/vext/ref/shared/type/vec4)) | void |
| **[DrawSphere](#drawsphere)**(pos: [Vec3](/vext/ref/shared/type/vec3), radius: float, color: [Vec4](/vext/ref/shared/type/vec4), renderLines: bool, smallSizeSegmentDecrease: bool) | void |
| **[DrawLine2D](#drawline2d)**(from: [Vec2](/vext/ref/shared/type/vec2), to: [Vec2](/vext/ref/shared/type/vec2), color: [Vec4](/vext/ref/shared/type/vec4)) | void |
| **[DrawText2D](#drawtext2d)**(x: int, y: int, text: string, color: [Vec4](/vext/ref/shared/type/vec4), scale: float) | void |
| **[DrawVertices](#drawvertices)**(type: [DebugGeometryType](/vext/ref/shared/type/debuggeometrytype), vertices: [DebugVertex](/vext/ref/client/type/debugvertex){}) | void |
| **[DrawOBB](#drawobb)**(aabb: [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox), transform: [LinearTransform](/vext/ref/shared/type/lineartransform), color: [Vec4](/vext/ref/shared/type/vec4)) | void |

## Methods

### DrawLine {#drawline}

> **DrawLine**(from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), colorFrom: [Vec4](/vext/ref/shared/type/vec4), colorTo: [Vec4](/vext/ref/shared/type/vec4))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **from** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **to** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **colorFrom** | [Vec4](/vext/ref/shared/type/vec4) |  |
| **colorTo** | [Vec4](/vext/ref/shared/type/vec4) |  |

### DrawTriangle {#drawtriangle}

> **DrawTriangle**(pos1: [Vec3](/vext/ref/shared/type/vec3), pos2: [Vec3](/vext/ref/shared/type/vec3), pos3: [Vec3](/vext/ref/shared/type/vec3), color1: [Vec4](/vext/ref/shared/type/vec4), color2: [Vec4](/vext/ref/shared/type/vec4), color3: [Vec4](/vext/ref/shared/type/vec4))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **pos1** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **pos2** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **pos3** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **color1** | [Vec4](/vext/ref/shared/type/vec4) |  |
| **color2** | [Vec4](/vext/ref/shared/type/vec4) |  |
| **color3** | [Vec4](/vext/ref/shared/type/vec4) |  |

### DrawSphere {#drawsphere}

> **DrawSphere**(pos: [Vec3](/vext/ref/shared/type/vec3), radius: float, color: [Vec4](/vext/ref/shared/type/vec4), renderLines: bool, smallSizeSegmentDecrease: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **pos** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **radius** | float |  |
| **color** | [Vec4](/vext/ref/shared/type/vec4) |  |
| **renderLines** | bool |  |
| **smallSizeSegmentDecrease** | bool |  |

### DrawLine2D {#drawline2d}

> **DrawLine2D**(from: [Vec2](/vext/ref/shared/type/vec2), to: [Vec2](/vext/ref/shared/type/vec2), color: [Vec4](/vext/ref/shared/type/vec4))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **from** | [Vec2](/vext/ref/shared/type/vec2) |  |
| **to** | [Vec2](/vext/ref/shared/type/vec2) |  |
| **color** | [Vec4](/vext/ref/shared/type/vec4) |  |

### DrawText2D {#drawtext2d}

> **DrawText2D**(x: int, y: int, text: string, color: [Vec4](/vext/ref/shared/type/vec4), scale: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **x** | int |  |
| **y** | int |  |
| **text** | string |  |
| **color** | [Vec4](/vext/ref/shared/type/vec4) |  |
| **scale** | float |  |

### DrawVertices {#drawvertices}

> **DrawVertices**(type: [DebugGeometryType](/vext/ref/shared/type/debuggeometrytype), vertices: [DebugVertex](/vext/ref/client/type/debugvertex){})

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **type** | [DebugGeometryType](/vext/ref/shared/type/debuggeometrytype) |  |
| **vertices** | [DebugVertex](/vext/ref/client/type/debugvertex){} |  |

### DrawOBB {#drawobb}

> **DrawOBB**(aabb: [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox), transform: [LinearTransform](/vext/ref/shared/type/lineartransform), color: [Vec4](/vext/ref/shared/type/vec4))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **aabb** | [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox) |  |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |
| **color** | [Vec4](/vext/ref/shared/type/vec4) |  |

