---
title: LoosePartPhysicsData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[LoosePartPhysicsData](#constructor-0)**() |
| **[LoosePartPhysicsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LoosePartPhysicsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "fakePhysics" >}} | [FakePhysicsData](/vext/ref/fb/fakephysicsdata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LoosePartPhysicsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LoosePartPhysicsData {#constructor-0}

> **LoosePartPhysicsData**()

Creates a new [LoosePartPhysicsData](/vext/ref/fb/loosepartphysicsdata) frostbite instance.

### LoosePartPhysicsData {#constructor-1}

> **LoosePartPhysicsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LoosePartPhysicsData](/vext/ref/fb/loosepartphysicsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LoosePartPhysicsData {#constructor-2}

> **LoosePartPhysicsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LoosePartPhysicsData](/vext/ref/fb/loosepartphysicsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LoosePartPhysicsData](/vext/ref/fb/loosepartphysicsdata). |

## Properties

### {{% prop-heading "fakePhysics" %}}

> **[FakePhysicsData](/vext/ref/fb/fakephysicsdata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LoosePartPhysicsData](/vext/ref/fb/loosepartphysicsdata) type.

