---
title: LockingScoringHandlerData
---

Inherits from [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata)

## Summary

### Constructors

|  |
| --- |
| **[LockingScoringHandlerData](#constructor-0)**() |
| **[LockingScoringHandlerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LockingScoringHandlerData](#constructor-2)**(other: [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata)) |
| **[LockingScoringHandlerData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "hotVehicleTimeout" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LockingScoringHandlerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LockingScoringHandlerData {#constructor-0}

> **LockingScoringHandlerData**()

Creates a new [LockingScoringHandlerData](/vext/ref/fb/lockingscoringhandlerdata) frostbite instance.

### LockingScoringHandlerData {#constructor-1}

> **LockingScoringHandlerData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LockingScoringHandlerData](/vext/ref/fb/lockingscoringhandlerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LockingScoringHandlerData {#constructor-2}

> **LockingScoringHandlerData**(other: [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata))

Casts an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata) to [LockingScoringHandlerData](/vext/ref/fb/lockingscoringhandlerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata) | The instance to cast to [LockingScoringHandlerData](/vext/ref/fb/lockingscoringhandlerdata). |

### LockingScoringHandlerData {#constructor-3}

> **LockingScoringHandlerData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LockingScoringHandlerData](/vext/ref/fb/lockingscoringhandlerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LockingScoringHandlerData](/vext/ref/fb/lockingscoringhandlerdata). |

## Properties

### {{% prop-heading "hotVehicleTimeout" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LockingScoringHandlerData](/vext/ref/fb/lockingscoringhandlerdata) type.

