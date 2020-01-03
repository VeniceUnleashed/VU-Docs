---
title: PhysicsSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| PhysicsSettings()                                                          | Create a new instance of this container type.                                                                         |
| PhysicsSettings(PhysicsSettings other)                                     | Create a reference copy of an instance of the same type.                                                              |
| PhysicsSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsSettings](PhysicsSettings). |

## Properties

| Name                               | Type   | Description |
| ---------------------------------- | ------ | ----------- |
| integrateJobCount                  | number |             |
| clientEffectWorldThreadCount       | number |             |
| clientWorldThreadCount             | number |             |
| serverWorldThreadCount             | number |             |
| collideJobCount                    | number |             |
| enable                             | bool   |             |
| enableAIRigidBody                  | bool   |             |
| forestEnable                       | bool   |             |
| enableJobs                         | bool   |             |
| removeRagdollWhenWoken             | bool   |             |
| removeFromWorldOnCollisionOverflow | bool   |             |
| singleStepCharacter                | bool   |             |
| forceSingleStepCharacterInSP       | bool   |             |
| enableFollowWheelRaycasts          | bool   |             |
| enableClientWheelRaycasts          | bool   |             |
| enableASyncWheelRaycasts           | bool   |             |
| useDelayedWakeUpClient             | bool   |             |
| useDelayedWakeUpServer             | bool   |             |
| suppressDebrisSpawnUntilReady      | bool   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsSettings](PhysicsSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsSettings](PhysicsSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
