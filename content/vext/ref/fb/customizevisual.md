---
title: CustomizeVisual
---


## Summary
### Constructors
| |
| ----------- |
| **[CustomizeVisual](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "visual" >}} | [UnlockAsset](/vext/ref/fb/unlockasset)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CustomizeVisual](/vext/ref/fb/customizevisual) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CustomizeVisual" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CustomizeVisual {#constructor-0}
> **CustomizeVisual**()

Creates a new [CustomizeVisual](/vext/ref/fb/customizevisual) frostbite structure.

## Properties
### {{% prop-heading "visual" %}}
> **[UnlockAsset](/vext/ref/fb/unlockasset)**[]

## Methods
### Clone
> **Clone**(): [CustomizeVisual](/vext/ref/fb/customizevisual)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CustomizeVisual](/vext/ref/fb/customizevisual)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CustomizeVisual](/vext/ref/fb/customizevisual) type.

