---
title: MovementActionGroupData
---

Inherits from [MovementActionData](/vext/ref/fb/movementactiondata)

## Summary

### Constructors

|  |
| --- |
| **[MovementActionGroupData](#constructor-0)**() |
| **[MovementActionGroupData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MovementActionGroupData](#constructor-2)**(other: [MovementActionData](/vext/ref/fb/movementactiondata)) |
| **[MovementActionGroupData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "actions" >}} | [MovementActionData](/vext/ref/fb/movementactiondata)[] |
| {{< prop "runSimultaneously" >}} | bool |
| {{< prop "restartChildren" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MovementActionGroupData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MovementActionGroupData {#constructor-0}

> **MovementActionGroupData**()

Creates a new [MovementActionGroupData](/vext/ref/fb/movementactiongroupdata) frostbite instance.

### MovementActionGroupData {#constructor-1}

> **MovementActionGroupData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MovementActionGroupData](/vext/ref/fb/movementactiongroupdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MovementActionGroupData {#constructor-2}

> **MovementActionGroupData**(other: [MovementActionData](/vext/ref/fb/movementactiondata))

Casts an instance of type [MovementActionData](/vext/ref/fb/movementactiondata) to [MovementActionGroupData](/vext/ref/fb/movementactiongroupdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MovementActionData](/vext/ref/fb/movementactiondata) | The instance to cast to [MovementActionGroupData](/vext/ref/fb/movementactiongroupdata). |

### MovementActionGroupData {#constructor-3}

> **MovementActionGroupData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MovementActionGroupData](/vext/ref/fb/movementactiongroupdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MovementActionGroupData](/vext/ref/fb/movementactiongroupdata). |

## Properties

### {{% prop-heading "actions" %}}

> **[MovementActionData](/vext/ref/fb/movementactiondata)**[]

### {{% prop-heading "runSimultaneously" %}}

> **bool**

### {{% prop-heading "restartChildren" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MovementActionGroupData](/vext/ref/fb/movementactiongroupdata) type.

