---
title: PhysicsSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[PhysicsSettings](#constructor-0)**() |
| **[PhysicsSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PhysicsSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "integrateJobCount" >}} | int |
| {{< prop "clientEffectWorldThreadCount" >}} | int |
| {{< prop "clientWorldThreadCount" >}} | int |
| {{< prop "serverWorldThreadCount" >}} | int |
| {{< prop "collideJobCount" >}} | int |
| {{< prop "enable" >}} | bool |
| {{< prop "enableAIRigidBody" >}} | bool |
| {{< prop "forestEnable" >}} | bool |
| {{< prop "enableJobs" >}} | bool |
| {{< prop "removeRagdollWhenWoken" >}} | bool |
| {{< prop "removeFromWorldOnCollisionOverflow" >}} | bool |
| {{< prop "singleStepCharacter" >}} | bool |
| {{< prop "forceSingleStepCharacterInSP" >}} | bool |
| {{< prop "enableFollowWheelRaycasts" >}} | bool |
| {{< prop "enableClientWheelRaycasts" >}} | bool |
| {{< prop "enableASyncWheelRaycasts" >}} | bool |
| {{< prop "useDelayedWakeUpClient" >}} | bool |
| {{< prop "useDelayedWakeUpServer" >}} | bool |
| {{< prop "suppressDebrisSpawnUntilReady" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PhysicsSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PhysicsSettings {#constructor-0}

> **PhysicsSettings**()

Creates a new [PhysicsSettings](/vext/ref/fb/physicssettings) frostbite instance.

### PhysicsSettings {#constructor-1}

> **PhysicsSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PhysicsSettings](/vext/ref/fb/physicssettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PhysicsSettings {#constructor-2}

> **PhysicsSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PhysicsSettings](/vext/ref/fb/physicssettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PhysicsSettings](/vext/ref/fb/physicssettings). |

## Properties

### {{% prop-heading "integrateJobCount" %}}

> **int**

### {{% prop-heading "clientEffectWorldThreadCount" %}}

> **int**

### {{% prop-heading "clientWorldThreadCount" %}}

> **int**

### {{% prop-heading "serverWorldThreadCount" %}}

> **int**

### {{% prop-heading "collideJobCount" %}}

> **int**

### {{% prop-heading "enable" %}}

> **bool**

### {{% prop-heading "enableAIRigidBody" %}}

> **bool**

### {{% prop-heading "forestEnable" %}}

> **bool**

### {{% prop-heading "enableJobs" %}}

> **bool**

### {{% prop-heading "removeRagdollWhenWoken" %}}

> **bool**

### {{% prop-heading "removeFromWorldOnCollisionOverflow" %}}

> **bool**

### {{% prop-heading "singleStepCharacter" %}}

> **bool**

### {{% prop-heading "forceSingleStepCharacterInSP" %}}

> **bool**

### {{% prop-heading "enableFollowWheelRaycasts" %}}

> **bool**

### {{% prop-heading "enableClientWheelRaycasts" %}}

> **bool**

### {{% prop-heading "enableASyncWheelRaycasts" %}}

> **bool**

### {{% prop-heading "useDelayedWakeUpClient" %}}

> **bool**

### {{% prop-heading "useDelayedWakeUpServer" %}}

> **bool**

### {{% prop-heading "suppressDebrisSpawnUntilReady" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PhysicsSettings](/vext/ref/fb/physicssettings) type.

