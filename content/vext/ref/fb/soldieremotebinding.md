---
title: SoldierEmoteBinding
---

## Summary

### Constructors

|  |
| --- |
| **[SoldierEmoteBinding](#constructor-0)**() |
| **[SoldierEmoteBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "speak" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "isSquadLeader" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteSpot" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteOk" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteNeedARide" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteGoGoGo" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteNeedBackup" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteThanks" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteNeedMedic" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteFollowMe" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteNeedAmmo" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteSorry" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteNo" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteDefendCapturePoint" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteAttackCapturePoint" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "emoteMoveToPosition" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoldierEmoteBinding](/vext/ref/fb/soldieremotebinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierEmoteBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierEmoteBinding {#constructor-0}

> **SoldierEmoteBinding**()

Creates a new [SoldierEmoteBinding](/vext/ref/fb/soldieremotebinding) frostbite instance.

### SoldierEmoteBinding {#constructor-1}

> **SoldierEmoteBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierEmoteBinding](/vext/ref/fb/soldieremotebinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "speak" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "isSquadLeader" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteSpot" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteOk" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteNeedARide" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteGoGoGo" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteNeedBackup" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteThanks" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteNeedMedic" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteFollowMe" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteNeedAmmo" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteSorry" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteNo" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteDefendCapturePoint" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteAttackCapturePoint" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "emoteMoveToPosition" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [SoldierEmoteBinding](/vext/ref/fb/soldieremotebinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoldierEmoteBinding](/vext/ref/fb/soldieremotebinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierEmoteBinding](/vext/ref/fb/soldieremotebinding) type.

