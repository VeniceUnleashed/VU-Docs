---
title: CTFScoringHandlerData
---

Inherits from [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata)

## Summary

### Constructors

|  |
| --- |
| **[CTFScoringHandlerData](#constructor-0)**() |
| **[CTFScoringHandlerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CTFScoringHandlerData](#constructor-2)**(other: [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata)) |
| **[CTFScoringHandlerData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxTeams" >}} | int |
| {{< prop "pickUpAssistRadius" >}} | float |
| {{< prop "captureAssistRadius" >}} | float |
| {{< prop "enemyThreatRadius" >}} | float |
| {{< prop "enemySuppressionTimeout" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CTFScoringHandlerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CTFScoringHandlerData {#constructor-0}

> **CTFScoringHandlerData**()

Creates a new [CTFScoringHandlerData](/vext/ref/fb/ctfscoringhandlerdata) frostbite instance.

### CTFScoringHandlerData {#constructor-1}

> **CTFScoringHandlerData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CTFScoringHandlerData](/vext/ref/fb/ctfscoringhandlerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CTFScoringHandlerData {#constructor-2}

> **CTFScoringHandlerData**(other: [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata))

Casts an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata) to [CTFScoringHandlerData](/vext/ref/fb/ctfscoringhandlerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata) | The instance to cast to [CTFScoringHandlerData](/vext/ref/fb/ctfscoringhandlerdata). |

### CTFScoringHandlerData {#constructor-3}

> **CTFScoringHandlerData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CTFScoringHandlerData](/vext/ref/fb/ctfscoringhandlerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CTFScoringHandlerData](/vext/ref/fb/ctfscoringhandlerdata). |

## Properties

### {{% prop-heading "maxTeams" %}}

> **int**

### {{% prop-heading "pickUpAssistRadius" %}}

> **float**

### {{% prop-heading "captureAssistRadius" %}}

> **float**

### {{% prop-heading "enemyThreatRadius" %}}

> **float**

### {{% prop-heading "enemySuppressionTimeout" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CTFScoringHandlerData](/vext/ref/fb/ctfscoringhandlerdata) type.

