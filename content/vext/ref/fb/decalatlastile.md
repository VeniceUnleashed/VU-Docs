---
title: DecalAtlasTile
---


## Summary
### Constructors
| |
| ----------- |
| **[DecalAtlasTile](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "tileIndexX" >}} | float |
| {{< prop "tileIndexY" >}} | float |
| {{< prop "tileCountX" >}} | float |
| {{< prop "tileCountY" >}} | float |
| {{< prop "flipX" >}} | bool |
| {{< prop "flipY" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DecalAtlasTile](/vext/ref/fb/decalatlastile) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DecalAtlasTile" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DecalAtlasTile {#constructor-0}
> **DecalAtlasTile**()

Creates a new [DecalAtlasTile](/vext/ref/fb/decalatlastile) frostbite structure.

## Properties
### {{% prop-heading "tileIndexX" %}}
> **float**

### {{% prop-heading "tileIndexY" %}}
> **float**

### {{% prop-heading "tileCountX" %}}
> **float**

### {{% prop-heading "tileCountY" %}}
> **float**

### {{% prop-heading "flipX" %}}
> **bool**

### {{% prop-heading "flipY" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [DecalAtlasTile](/vext/ref/fb/decalatlastile)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DecalAtlasTile](/vext/ref/fb/decalatlastile)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DecalAtlasTile](/vext/ref/fb/decalatlastile) type.

