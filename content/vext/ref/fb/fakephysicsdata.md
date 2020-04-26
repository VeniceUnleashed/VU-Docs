---
title: FakePhysicsData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[FakePhysicsData](#constructor-0)**() |
| **[FakePhysicsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[FakePhysicsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "childFakePhysics" >}} | [FakePhysicsData](/vext/ref/fb/fakephysicsdata) \| nil |
| {{< prop "startSpeed" >}} | float |
| {{< prop "gravityModifier" >}} | float |
| {{< prop "startDampening" >}} | float |
| {{< prop "endDampening" >}} | float |
| {{< prop "minSpeed" >}} | float |
| {{< prop "maxSpeed" >}} | float |
| {{< prop "mass" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FakePhysicsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FakePhysicsData {#constructor-0}
> **FakePhysicsData**()

Creates a new [FakePhysicsData](/vext/ref/fb/fakephysicsdata) frostbite instance.

### FakePhysicsData {#constructor-1}
> **FakePhysicsData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [FakePhysicsData](/vext/ref/fb/fakephysicsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### FakePhysicsData {#constructor-2}
> **FakePhysicsData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FakePhysicsData](/vext/ref/fb/fakephysicsdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [FakePhysicsData](/vext/ref/fb/fakephysicsdata). |

## Properties
### {{% prop-heading "childFakePhysics" %}}
> **[FakePhysicsData](/vext/ref/fb/fakephysicsdata)** | **nil**

### {{% prop-heading "startSpeed" %}}
> **float**

### {{% prop-heading "gravityModifier" %}}
> **float**

### {{% prop-heading "startDampening" %}}
> **float**

### {{% prop-heading "endDampening" %}}
> **float**

### {{% prop-heading "minSpeed" %}}
> **float**

### {{% prop-heading "maxSpeed" %}}
> **float**

### {{% prop-heading "mass" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FakePhysicsData](/vext/ref/fb/fakephysicsdata) type.

