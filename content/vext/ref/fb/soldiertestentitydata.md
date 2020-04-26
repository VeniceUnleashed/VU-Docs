---
title: SoldierTestEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[SoldierTestEntityData](#constructor-0)**() |
| **[SoldierTestEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoldierTestEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[SoldierTestEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[SoldierTestEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SoldierTestEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SoldierTestEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SoldierTestEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "testSoldier" >}} | [SoldierBlueprint](/vext/ref/fb/soldierblueprint) \| nil |
| {{< prop "template" >}} | [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata) \| nil |
| {{< prop "testVehicle" >}} | [VehicleBlueprint](/vext/ref/fb/vehicleblueprint) \| nil |
| {{< prop "specialAnimationIndex" >}} | float |
| {{< prop "unlocksProfile" >}} | [RawFileAsset](/vext/ref/fb/rawfileasset) \| nil |
| {{< prop "team" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "randomSeed" >}} | int |
| {{< prop "startSequence" >}} | [MovementActionData](/vext/ref/fb/movementactiondata) \| nil |
| {{< prop "startSequenceRoot" >}} | [MovementActionRoot](/vext/ref/fb/movementactionroot) \| nil |
| {{< prop "yawInputVal" >}} | float |
| {{< prop "cameraMovementsFilename" >}} | string |
| {{< prop "inputRecorder" >}} | [InputRecorderData](/vext/ref/fb/inputrecorderdata) \| nil |
| {{< prop "throttleInputVal" >}} | float |
| {{< prop "fireInputVal" >}} | float |
| {{< prop "strafeInputVal" >}} | float |
| {{< prop "proneInputVal" >}} | float |
| {{< prop "pitchInputVal" >}} | float |
| {{< prop "rollInputVal" >}} | float |
| {{< prop "zoomInputVal" >}} | float |
| {{< prop "jumpInputVal" >}} | float |
| {{< prop "activeInputRecording" >}} | float |
| {{< prop "authoritativeAimingActive" >}} | float |
| {{< prop "fireCounterMeasure" >}} | float |
| {{< prop "authoritativeYaw" >}} | float |
| {{< prop "authoritativePitch" >}} | float |
| {{< prop "runAutomatically" >}} | bool |
| {{< prop "useUnlocksProfile" >}} | bool |
| {{< prop "sprintInputVal" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierTestEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierTestEntityData {#constructor-0}

> **SoldierTestEntityData**()

Creates a new [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata) frostbite instance.

### SoldierTestEntityData {#constructor-1}

> **SoldierTestEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoldierTestEntityData {#constructor-2}

> **SoldierTestEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata). |

### SoldierTestEntityData {#constructor-3}

> **SoldierTestEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata). |

### SoldierTestEntityData {#constructor-4}

> **SoldierTestEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata). |

### SoldierTestEntityData {#constructor-5}

> **SoldierTestEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata). |

### SoldierTestEntityData {#constructor-6}

> **SoldierTestEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata). |

### SoldierTestEntityData {#constructor-7}

> **SoldierTestEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata). |

## Properties

### {{% prop-heading "testSoldier" %}}

> **[SoldierBlueprint](/vext/ref/fb/soldierblueprint)** \| **nil**

### {{% prop-heading "template" %}}

> **[SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata)** \| **nil**

### {{% prop-heading "testVehicle" %}}

> **[VehicleBlueprint](/vext/ref/fb/vehicleblueprint)** \| **nil**

### {{% prop-heading "specialAnimationIndex" %}}

> **float**

### {{% prop-heading "unlocksProfile" %}}

> **[RawFileAsset](/vext/ref/fb/rawfileasset)** \| **nil**

### {{% prop-heading "team" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "randomSeed" %}}

> **int**

### {{% prop-heading "startSequence" %}}

> **[MovementActionData](/vext/ref/fb/movementactiondata)** \| **nil**

### {{% prop-heading "startSequenceRoot" %}}

> **[MovementActionRoot](/vext/ref/fb/movementactionroot)** \| **nil**

### {{% prop-heading "yawInputVal" %}}

> **float**

### {{% prop-heading "cameraMovementsFilename" %}}

> **string**

### {{% prop-heading "inputRecorder" %}}

> **[InputRecorderData](/vext/ref/fb/inputrecorderdata)** \| **nil**

### {{% prop-heading "throttleInputVal" %}}

> **float**

### {{% prop-heading "fireInputVal" %}}

> **float**

### {{% prop-heading "strafeInputVal" %}}

> **float**

### {{% prop-heading "proneInputVal" %}}

> **float**

### {{% prop-heading "pitchInputVal" %}}

> **float**

### {{% prop-heading "rollInputVal" %}}

> **float**

### {{% prop-heading "zoomInputVal" %}}

> **float**

### {{% prop-heading "jumpInputVal" %}}

> **float**

### {{% prop-heading "activeInputRecording" %}}

> **float**

### {{% prop-heading "authoritativeAimingActive" %}}

> **float**

### {{% prop-heading "fireCounterMeasure" %}}

> **float**

### {{% prop-heading "authoritativeYaw" %}}

> **float**

### {{% prop-heading "authoritativePitch" %}}

> **float**

### {{% prop-heading "runAutomatically" %}}

> **bool**

### {{% prop-heading "useUnlocksProfile" %}}

> **bool**

### {{% prop-heading "sprintInputVal" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata) type.

