---
title: PathfindingBuildSettingsAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingBuildSettingsAsset()                                                          | Create a new instance of this container type.                                                                                                     |
| PathfindingBuildSettingsAsset(PathfindingBuildSettingsAsset other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| PathfindingBuildSettingsAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PathfindingBuildSettingsAsset](PathfindingBuildSettingsAsset).                                      |
| PathfindingBuildSettingsAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathfindingBuildSettingsAsset](PathfindingBuildSettingsAsset). |

## Properties

| Name                             | Type   | Description |
| -------------------------------- | ------ | ----------- |
| entityRadius                     | number |             |
| entityHeight                     | number |             |
| maxWalkableSlope                 | number |             |
| maxStep                          | number |             |
| minIslandSurfaceArea             | number |             |
| voxSize                          | number |             |
| gridSideLength                   | number |             |
| additionalInwardsSmoothingDist   | number |             |
| terrainSamplingStep              | number |             |
| tesselateForPathingAccuracy      | bool   |             |
| useEnhancedTerrainTracking       | bool   |             |
| optimizeForAxisAligned           | bool   |             |
| leaveSmallIslandsTouchingPortals | bool   |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PathfindingBuildSettingsAsset](PathfindingBuildSettingsAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PathfindingBuildSettingsAsset](PathfindingBuildSettingsAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
