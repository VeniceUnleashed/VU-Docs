---
title: AvengerScoringHandlerData
---

Inherits from [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata)

## Summary

### Constructors

|  |
| --- |
| **[AvengerScoringHandlerData](#constructor-0)**() |
| **[AvengerScoringHandlerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AvengerScoringHandlerData](#constructor-2)**(other: [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata)) |
| **[AvengerScoringHandlerData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "avengerKillTimeout" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AvengerScoringHandlerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AvengerScoringHandlerData {#constructor-0}

> **AvengerScoringHandlerData**()

Creates a new [AvengerScoringHandlerData](/vext/ref/fb/avengerscoringhandlerdata) frostbite instance.

### AvengerScoringHandlerData {#constructor-1}

> **AvengerScoringHandlerData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AvengerScoringHandlerData](/vext/ref/fb/avengerscoringhandlerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AvengerScoringHandlerData {#constructor-2}

> **AvengerScoringHandlerData**(other: [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata))

Casts an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata) to [AvengerScoringHandlerData](/vext/ref/fb/avengerscoringhandlerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata) | The instance to cast to [AvengerScoringHandlerData](/vext/ref/fb/avengerscoringhandlerdata). |

### AvengerScoringHandlerData {#constructor-3}

> **AvengerScoringHandlerData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AvengerScoringHandlerData](/vext/ref/fb/avengerscoringhandlerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AvengerScoringHandlerData](/vext/ref/fb/avengerscoringhandlerdata). |

## Properties

### {{% prop-heading "avengerKillTimeout" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AvengerScoringHandlerData](/vext/ref/fb/avengerscoringhandlerdata) type.

