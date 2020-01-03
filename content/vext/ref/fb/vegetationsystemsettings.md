---
title: VegetationSystemSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| VegetationSystemSettings()                                                          | Create a new instance of this container type.                                                                                           |
| VegetationSystemSettings(VegetationSystemSettings other)                            | Create a reference copy of an instance of the same type.                                                                                |
| VegetationSystemSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VegetationSystemSettings](VegetationSystemSettings). |

## Properties

| Name                   | Type   | Description |
| ---------------------- | ------ | ----------- |
| windVariation          | number |             |
| windVariationRate      | number |             |
| windStrength           | number |             |
| jointTensionLimit      | number |             |
| forceShadowLod         | number |             |
| maxPreSimsPerJob       | number |             |
| simulationMemKbClient  | number |             |
| maxActiveDistance      | number |             |
| simulationMemKbServer  | number |             |
| jobCount               | number |             |
| jointTensionLimitIndex | number |             |
| timeScale              | number |             |
| localInfluencesEnabled | bool   |             |
| subDestructionEnabled  | bool   |             |
| dissolveEnable         | bool   |             |
| enable                 | bool   |             |
| simulateServerSide     | bool   |             |
| enableJobs             | bool   |             |
| shadowMeshEnable       | bool   |             |
| drawNodes              | bool   |             |
| drawEnable             | bool   |             |
| batchDrawEnable        | bool   |             |
| destructionEnabled     | bool   |             |
| useShadowLodOffset     | bool   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VegetationSystemSettings](VegetationSystemSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VegetationSystemSettings](VegetationSystemSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
