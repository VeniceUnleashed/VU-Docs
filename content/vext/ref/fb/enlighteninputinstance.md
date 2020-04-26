---
title: EnlightenInputInstance
---


## Summary
### Constructors
| |
| ----------- |
| **[EnlightenInputInstance](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "asset" >}} | string |
| {{< prop "objectVariation" >}} | string |
| {{< prop "systemId" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EnlightenInputInstance" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EnlightenInputInstance {#constructor-0}
> **EnlightenInputInstance**()

Creates a new [EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance) frostbite structure.

## Properties
### {{% prop-heading "transform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "asset" %}}
> **string**

### {{% prop-heading "objectVariation" %}}
> **string**

### {{% prop-heading "systemId" %}}
> **int**

## Methods
### Clone
> **Clone**(): [EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance) type.

