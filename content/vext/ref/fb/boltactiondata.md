---
title: BoltActionData
---


## Summary
### Constructors
| |
| ----------- |
| **[BoltActionData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "boltActionDelay" >}} | float |
| {{< prop "boltActionTime" >}} | float |
| {{< prop "holdBoltActionUntilFireRelease" >}} | bool |
| {{< prop "holdBoltActionUntilZoomRelease" >}} | bool |
| {{< prop "forceBoltActionOnFireTrigger" >}} | bool |
| {{< prop "unZoomOnBoltAction" >}} | bool |
| {{< prop "returnToZoomAfterBoltAction" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [BoltActionData](/vext/ref/fb/boltactiondata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BoltActionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BoltActionData {#constructor-0}
> **BoltActionData**()

Creates a new [BoltActionData](/vext/ref/fb/boltactiondata) frostbite structure.

## Properties
### {{% prop-heading "boltActionDelay" %}}
> **float**

### {{% prop-heading "boltActionTime" %}}
> **float**

### {{% prop-heading "holdBoltActionUntilFireRelease" %}}
> **bool**

### {{% prop-heading "holdBoltActionUntilZoomRelease" %}}
> **bool**

### {{% prop-heading "forceBoltActionOnFireTrigger" %}}
> **bool**

### {{% prop-heading "unZoomOnBoltAction" %}}
> **bool**

### {{% prop-heading "returnToZoomAfterBoltAction" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [BoltActionData](/vext/ref/fb/boltactiondata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[BoltActionData](/vext/ref/fb/boltactiondata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BoltActionData](/vext/ref/fb/boltactiondata) type.

