---
title: PhysicsRenderSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsRenderSettings()                                                          | Create a new instance of this container type.                                                                                     |
| PhysicsRenderSettings(PhysicsRenderSettings other)                               | Create a reference copy of an instance of the same type.                                                                          |
| PhysicsRenderSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsRenderSettings](PhysicsRenderSettings). |

## Properties

| Name                             | Type   | Description |
| -------------------------------- | ------ | ----------- |
| renderSpecificPart               | number |             |
| viewDistance                     | number |             |
| renderClient                     | bool   |             |
| renderEffectWorld                | bool   |             |
| renderDetail                     | bool   |             |
| renderStatic                     | bool   |             |
| renderUngrouped                  | bool   |             |
| renderRagdoll                    | bool   |             |
| renderGroup                      | bool   |             |
| renderPhantoms                   | bool   |             |
| renderCharacterCollision         | bool   |             |
| renderWater                      | bool   |             |
| renderSolidGeometry              | bool   |             |
| useShapeCache                    | bool   |             |
| renderConstraints                | bool   |             |
| renderOnlyContactConstraints     | bool   |             |
| renderConstraintCount            | bool   |             |
| renderActiveConstraintCount      | bool   |             |
| renderSimulationIslands          | bool   |             |
| renderBroadphaseHandles          | bool   |             |
| renderDestructionConnections     | bool   |             |
| renderPartBoundingBoxes          | bool   |             |
| renderOnlyBoundingBoxes          | bool   |             |
| renderInertia                    | bool   |             |
| renderCenterOfMass               | bool   |             |
| renderLinearVelocity             | bool   |             |
| renderCollidesWithTerrain        | bool   |             |
| renderCollisionSpheres           | bool   |             |
| renderEntityStats                | bool   |             |
| renderWorldStats                 | bool   |             |
| showContactsInWorldStats         | bool   |             |
| showInactiveContactsInWorldStats | bool   |             |
| showPhantomsInWorldStats         | bool   |             |
| showFixedObjectsInWorldStats     | bool   |             |
| renderMemoryUsed                 | bool   |             |
| collisionSpawnDebug              | bool   |             |
| renderServer                     | bool   |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsRenderSettings](PhysicsRenderSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsRenderSettings](PhysicsRenderSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
