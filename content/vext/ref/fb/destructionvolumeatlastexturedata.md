---
title: DestructionVolumeAtlasTextureData
---


## Summary
### Constructors
| |
| ----------- |
| **[DestructionVolumeAtlasTextureData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "atlasAlphaInfluence" >}} | float |
| {{< prop "maskEdgeThickness" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DestructionVolumeAtlasTextureData](/vext/ref/fb/destructionvolumeatlastexturedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DestructionVolumeAtlasTextureData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DestructionVolumeAtlasTextureData {#constructor-0}
> **DestructionVolumeAtlasTextureData**()

Creates a new [DestructionVolumeAtlasTextureData](/vext/ref/fb/destructionvolumeatlastexturedata) frostbite structure.

## Properties
### {{% prop-heading "atlasAlphaInfluence" %}}
> **float**

### {{% prop-heading "maskEdgeThickness" %}}
> **float**

## Methods
### Clone
> **Clone**(): [DestructionVolumeAtlasTextureData](/vext/ref/fb/destructionvolumeatlastexturedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DestructionVolumeAtlasTextureData](/vext/ref/fb/destructionvolumeatlastexturedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DestructionVolumeAtlasTextureData](/vext/ref/fb/destructionvolumeatlastexturedata) type.

