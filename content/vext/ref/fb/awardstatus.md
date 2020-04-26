---
title: AwardStatus
---


## Summary
### Constructors
| |
| ----------- |
| **[AwardStatus](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "code" >}} | string |
| {{< prop "currentValue" >}} | int |
| {{< prop "originalValue" >}} | int |
| {{< prop "counters" >}} | [CounterStatus](/vext/ref/fb/counterstatus)[] |
| {{< prop "isCounting" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AwardStatus](/vext/ref/fb/awardstatus) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AwardStatus" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AwardStatus {#constructor-0}
> **AwardStatus**()

Creates a new [AwardStatus](/vext/ref/fb/awardstatus) frostbite structure.

## Properties
### {{% prop-heading "code" %}}
> **string**

### {{% prop-heading "currentValue" %}}
> **int**

### {{% prop-heading "originalValue" %}}
> **int**

### {{% prop-heading "counters" %}}
> **[CounterStatus](/vext/ref/fb/counterstatus)**[]

### {{% prop-heading "isCounting" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [AwardStatus](/vext/ref/fb/awardstatus)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AwardStatus](/vext/ref/fb/awardstatus)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AwardStatus](/vext/ref/fb/awardstatus) type.

