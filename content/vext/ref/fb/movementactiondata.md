---
title: MovementActionData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[MovementActionData](#constructor-0)**() |
| **[MovementActionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MovementActionData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MovementActionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MovementActionData {#constructor-0}

> **MovementActionData**()

Creates a new [MovementActionData](/vext/ref/fb/movementactiondata) frostbite instance.

### MovementActionData {#constructor-1}

> **MovementActionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MovementActionData](/vext/ref/fb/movementactiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MovementActionData {#constructor-2}

> **MovementActionData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MovementActionData](/vext/ref/fb/movementactiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MovementActionData](/vext/ref/fb/movementactiondata). |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MovementActionData](/vext/ref/fb/movementactiondata) type.

