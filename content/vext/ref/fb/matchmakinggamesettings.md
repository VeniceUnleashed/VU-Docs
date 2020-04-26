---
title: MatchmakingGameSettings
---

## Summary

### Constructors

|  |
| --- |
| **[MatchmakingGameSettings](#constructor-0)**() |
| **[MatchmakingGameSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "openToBrowsing" >}} | bool |
| {{< prop "openToInvites" >}} | bool |
| {{< prop "openToMatchmaking" >}} | bool |
| {{< prop "openToJoinByPlayer" >}} | bool |
| {{< prop "hostMigratable" >}} | bool |
| {{< prop "ranked" >}} | bool |
| {{< prop "adminOnlyInvites" >}} | bool |
| {{< prop "enforceSingleGroupJoin" >}} | bool |
| {{< prop "joinInProgressSupported" >}} | bool |
| {{< prop "adminInvitesOnlyIgnoreEntryChecks" >}} | bool |
| {{< prop "enablePersistedGameId" >}} | bool |
| {{< prop "allowSameTeamId" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingGameSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MatchmakingGameSettings {#constructor-0}

> **MatchmakingGameSettings**()

Creates a new [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings) frostbite instance.

### MatchmakingGameSettings {#constructor-1}

> **MatchmakingGameSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "openToBrowsing" %}}

> **bool**

### {{% prop-heading "openToInvites" %}}

> **bool**

### {{% prop-heading "openToMatchmaking" %}}

> **bool**

### {{% prop-heading "openToJoinByPlayer" %}}

> **bool**

### {{% prop-heading "hostMigratable" %}}

> **bool**

### {{% prop-heading "ranked" %}}

> **bool**

### {{% prop-heading "adminOnlyInvites" %}}

> **bool**

### {{% prop-heading "enforceSingleGroupJoin" %}}

> **bool**

### {{% prop-heading "joinInProgressSupported" %}}

> **bool**

### {{% prop-heading "adminInvitesOnlyIgnoreEntryChecks" %}}

> **bool**

### {{% prop-heading "enablePersistedGameId" %}}

> **bool**

### {{% prop-heading "allowSameTeamId" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings) type.

