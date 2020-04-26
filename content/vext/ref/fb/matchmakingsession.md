---
title: MatchmakingSession
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[MatchmakingSession](#constructor-0)**() |
| **[MatchmakingSession](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MatchmakingSession](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "mode" >}} | [MatchmakingSessionMode](/vext/ref/fb/matchmakingsessionmode) |
| {{< prop "durationMs" >}} | int |
| {{< prop "criteria" >}} | [MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria) |
| {{< prop "createGameParams" >}} | [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters) |
| {{< prop "onNotFound" >}} | [MatchmakingSession](/vext/ref/fb/matchmakingsession) \| nil |
| {{< prop "modifiers" >}} | [MatchmakingModifier](/vext/ref/fb/matchmakingmodifier)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingSession" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MatchmakingSession {#constructor-0}

> **MatchmakingSession**()

Creates a new [MatchmakingSession](/vext/ref/fb/matchmakingsession) frostbite instance.

### MatchmakingSession {#constructor-1}

> **MatchmakingSession**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MatchmakingSession](/vext/ref/fb/matchmakingsession) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MatchmakingSession {#constructor-2}

> **MatchmakingSession**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MatchmakingSession](/vext/ref/fb/matchmakingsession). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MatchmakingSession](/vext/ref/fb/matchmakingsession). |

## Properties

### {{% prop-heading "mode" %}}

> **[MatchmakingSessionMode](/vext/ref/fb/matchmakingsessionmode)**

### {{% prop-heading "durationMs" %}}

> **int**

### {{% prop-heading "criteria" %}}

> **[MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria)**

### {{% prop-heading "createGameParams" %}}

> **[MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters)**

### {{% prop-heading "onNotFound" %}}

> **[MatchmakingSession](/vext/ref/fb/matchmakingsession)** \| **nil**

### {{% prop-heading "modifiers" %}}

> **[MatchmakingModifier](/vext/ref/fb/matchmakingmodifier)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MatchmakingSession](/vext/ref/fb/matchmakingsession) type.

