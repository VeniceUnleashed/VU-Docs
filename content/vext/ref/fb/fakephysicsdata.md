---
title: FakePhysicsData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[FakePhysicsData](#constructor-0)**() |
| **[FakePhysicsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[FakePhysicsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

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
| {{< static "FakePhysicsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FakePhysicsData {#constructor-0}

> **FakePhysicsData**()

Creates a new [FakePhysicsData](/vext/ref/fb/fakephysicsdata) frostbite instance.

### FakePhysicsData {#constructor-1}

> **FakePhysicsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FakePhysicsData](/vext/ref/fb/fakephysicsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### FakePhysicsData {#constructor-2}

> **FakePhysicsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [FakePhysicsData](/vext/ref/fb/fakephysicsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [FakePhysicsData](/vext/ref/fb/fakephysicsdata). |

## Properties

### {{% prop-heading "childFakePhysics" %}}

> **[FakePhysicsData](/vext/ref/fb/fakephysicsdata)** \| **nil**

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

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FakePhysicsData](/vext/ref/fb/fakephysicsdata) type.

