---
title: EdgeModelLightMapInstance
---


## Summary
### Constructors
| |
| ----------- |
| **[EdgeModelLightMapInstance](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "lightMapUv" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/class/vec3) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EdgeModelLightMapInstance](/vext/ref/fb/edgemodellightmapinstance) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EdgeModelLightMapInstance" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EdgeModelLightMapInstance {#constructor-0}
> **EdgeModelLightMapInstance**()

Creates a new [EdgeModelLightMapInstance](/vext/ref/fb/edgemodellightmapinstance) frostbite structure.

## Properties
### {{% prop-heading "lightMapUv" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "position" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

## Methods
### Clone
> **Clone**(): [EdgeModelLightMapInstance](/vext/ref/fb/edgemodellightmapinstance)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EdgeModelLightMapInstance](/vext/ref/fb/edgemodellightmapinstance)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EdgeModelLightMapInstance](/vext/ref/fb/edgemodellightmapinstance) type.

