---
title: MeshVariationInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[MeshVariationInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "meshAsset" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "origMeshAsset" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "variationAsset" >}} | [ObjectVariation](/vext/ref/fb/objectvariation) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MeshVariationInfo](/vext/ref/fb/meshvariationinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MeshVariationInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MeshVariationInfo {#constructor-0}
> **MeshVariationInfo**()

Creates a new [MeshVariationInfo](/vext/ref/fb/meshvariationinfo) frostbite structure.

## Properties
### {{% prop-heading "meshAsset" %}}
> **[MeshAsset](/vext/ref/fb/meshasset)** | **nil**

### {{% prop-heading "origMeshAsset" %}}
> **[MeshAsset](/vext/ref/fb/meshasset)** | **nil**

### {{% prop-heading "variationAsset" %}}
> **[ObjectVariation](/vext/ref/fb/objectvariation)** | **nil**

## Methods
### Clone
> **Clone**(): [MeshVariationInfo](/vext/ref/fb/meshvariationinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MeshVariationInfo](/vext/ref/fb/meshvariationinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MeshVariationInfo](/vext/ref/fb/meshvariationinfo) type.

