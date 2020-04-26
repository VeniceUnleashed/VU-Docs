---
title: EnlightenPipelineTerrainMesh
---


## Summary
### Constructors
| |
| ----------- |
| **[EnlightenPipelineTerrainMesh](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "uvTranslation" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "boundingBox" >}} | [AxisAlignedBox](/vext/ref/shared/class/axisalignedbox) |
| {{< prop "uvTransform" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "lightMapResolution" >}} | int |
| {{< prop "terrainMeshName" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EnlightenPipelineTerrainMesh" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EnlightenPipelineTerrainMesh {#constructor-0}
> **EnlightenPipelineTerrainMesh**()

Creates a new [EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh) frostbite structure.

## Properties
### {{% prop-heading "uvTranslation" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "boundingBox" %}}
> **[AxisAlignedBox](/vext/ref/shared/class/axisalignedbox)**

### {{% prop-heading "uvTransform" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "lightMapResolution" %}}
> **int**

### {{% prop-heading "terrainMeshName" %}}
> **string**

## Methods
### Clone
> **Clone**(): [EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EnlightenPipelineTerrainMesh](/vext/ref/fb/enlightenpipelineterrainmesh) type.

