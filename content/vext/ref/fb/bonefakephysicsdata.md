---
title: BoneFakePhysicsData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[BoneFakePhysicsData](#constructor-0)**() |
| **[BoneFakePhysicsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BoneFakePhysicsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "fakePhysics" >}} | [FakePhysicsData](/vext/ref/fb/fakephysicsdata) \| nil |
| {{< prop "boneName" >}} | string |
| {{< prop "boneId" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BoneFakePhysicsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BoneFakePhysicsData {#constructor-0}

> **BoneFakePhysicsData**()

Creates a new [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata) frostbite instance.

### BoneFakePhysicsData {#constructor-1}

> **BoneFakePhysicsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BoneFakePhysicsData {#constructor-2}

> **BoneFakePhysicsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata). |

## Properties

### {{% prop-heading "fakePhysics" %}}

> **[FakePhysicsData](/vext/ref/fb/fakephysicsdata)** \| **nil**

### {{% prop-heading "boneName" %}}

> **string**

### {{% prop-heading "boneId" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata) type.

