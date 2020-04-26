---
title: MovementActionRandomizerData
---

Inherits from [MovementActionData](/vext/ref/fb/movementactiondata)

## Summary

### Constructors

|  |
| --- |
| **[MovementActionRandomizerData](#constructor-0)**() |
| **[MovementActionRandomizerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MovementActionRandomizerData](#constructor-2)**(other: [MovementActionData](/vext/ref/fb/movementactiondata)) |
| **[MovementActionRandomizerData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "actions" >}} | [MovementActionData](/vext/ref/fb/movementactiondata)[] |
| {{< prop "reinsertIntoRandomizedListAfterUse" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MovementActionRandomizerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MovementActionRandomizerData {#constructor-0}

> **MovementActionRandomizerData**()

Creates a new [MovementActionRandomizerData](/vext/ref/fb/movementactionrandomizerdata) frostbite instance.

### MovementActionRandomizerData {#constructor-1}

> **MovementActionRandomizerData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MovementActionRandomizerData](/vext/ref/fb/movementactionrandomizerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MovementActionRandomizerData {#constructor-2}

> **MovementActionRandomizerData**(other: [MovementActionData](/vext/ref/fb/movementactiondata))

Casts an instance of type [MovementActionData](/vext/ref/fb/movementactiondata) to [MovementActionRandomizerData](/vext/ref/fb/movementactionrandomizerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MovementActionData](/vext/ref/fb/movementactiondata) | The instance to cast to [MovementActionRandomizerData](/vext/ref/fb/movementactionrandomizerdata). |

### MovementActionRandomizerData {#constructor-3}

> **MovementActionRandomizerData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MovementActionRandomizerData](/vext/ref/fb/movementactionrandomizerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MovementActionRandomizerData](/vext/ref/fb/movementactionrandomizerdata). |

## Properties

### {{% prop-heading "actions" %}}

> **[MovementActionData](/vext/ref/fb/movementactiondata)**[]

### {{% prop-heading "reinsertIntoRandomizedListAfterUse" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MovementActionRandomizerData](/vext/ref/fb/movementactionrandomizerdata) type.

