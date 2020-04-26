---
title: MatchmakingGameSettings
---


## Summary
### Constructors
| |
| ----------- |
| **[MatchmakingGameSettings](#constructor-0)**() |

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
| ------ | ---- |
| **[Clone](#clone)**() | [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingGameSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MatchmakingGameSettings {#constructor-0}
> **MatchmakingGameSettings**()

Creates a new [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings) frostbite structure.

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
### Clone
> **Clone**(): [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings) type.

