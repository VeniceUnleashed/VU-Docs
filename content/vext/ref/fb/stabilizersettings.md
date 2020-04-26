---
title: StabilizerSettings
---


## Summary
### Constructors
| |
| ----------- |
| **[StabilizerSettings](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "property" >}} | [StabilizerProperty](/vext/ref/fb/stabilizerproperty) |
| {{< prop "strength" >}} | float |
| {{< prop "advanced" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [StabilizerSettings](/vext/ref/fb/stabilizersettings) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "StabilizerSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### StabilizerSettings {#constructor-0}
> **StabilizerSettings**()

Creates a new [StabilizerSettings](/vext/ref/fb/stabilizersettings) frostbite structure.

## Properties
### {{% prop-heading "property" %}}
> **[StabilizerProperty](/vext/ref/fb/stabilizerproperty)**

### {{% prop-heading "strength" %}}
> **float**

### {{% prop-heading "advanced" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [StabilizerSettings](/vext/ref/fb/stabilizersettings)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[StabilizerSettings](/vext/ref/fb/stabilizersettings)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [StabilizerSettings](/vext/ref/fb/stabilizersettings) type.

