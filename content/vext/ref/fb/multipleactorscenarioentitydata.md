---
title: MultipleActorScenarioEntityData
---

Inherits from [SpatialEntityData](/vext/ref/fb/spatialentitydata)

## Summary

### Constructors

|  |
| --- |
| **[MultipleActorScenarioEntityData](#constructor-0)**() |
| **[MultipleActorScenarioEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MultipleActorScenarioEntityData](#constructor-2)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[MultipleActorScenarioEntityData](#constructor-3)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[MultipleActorScenarioEntityData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[MultipleActorScenarioEntityData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[MultipleActorScenarioEntityData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "worldSpaceConnectTransform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "actor5Part" >}} | int |
| {{< prop "scenarioAntRef" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "levelChoice" >}} | int |
| {{< prop "scenarioChoice" >}} | int |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "actor6Part" >}} | int |
| {{< prop "actor1" >}} | int |
| {{< prop "actor1Part" >}} | int |
| {{< prop "actor1SecondPart" >}} | int |
| {{< prop "actor2" >}} | int |
| {{< prop "actor2Part" >}} | int |
| {{< prop "actor2SecondPart" >}} | int |
| {{< prop "actor3" >}} | int |
| {{< prop "actor3Part" >}} | int |
| {{< prop "actor3SecondPart" >}} | int |
| {{< prop "actor4" >}} | int |
| {{< prop "actor4Part" >}} | int |
| {{< prop "actor4SecondPart" >}} | int |
| {{< prop "actor5" >}} | int |
| {{< prop "actor5SecondPart" >}} | int |
| {{< prop "actor6SecondPart" >}} | int |
| {{< prop "actor6" >}} | int |
| {{< prop "externalTime" >}} | float |
| {{< prop "aligningEnabled" >}} | bool |
| {{< prop "scenarioActive" >}} | bool |
| {{< prop "actor1Prepared" >}} | bool |
| {{< prop "actor2Prepared" >}} | bool |
| {{< prop "actor3Prepared" >}} | bool |
| {{< prop "actor4Prepared" >}} | bool |
| {{< prop "actor5Prepared" >}} | bool |
| {{< prop "actor6Prepared" >}} | bool |
| {{< prop "checkActor1Finished" >}} | bool |
| {{< prop "checkActor2Finished" >}} | bool |
| {{< prop "checkActor3Finished" >}} | bool |
| {{< prop "checkActor4Finished" >}} | bool |
| {{< prop "checkActor5Finished" >}} | bool |
| {{< prop "checkActor6Finished" >}} | bool |
| {{< prop "useInputEventPlayerAsPlayer1" >}} | bool |
| {{< prop "useExternalTime" >}} | bool |
| {{< prop "worldSpace" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MultipleActorScenarioEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MultipleActorScenarioEntityData {#constructor-0}

> **MultipleActorScenarioEntityData**()

Creates a new [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata) frostbite instance.

### MultipleActorScenarioEntityData {#constructor-1}

> **MultipleActorScenarioEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MultipleActorScenarioEntityData {#constructor-2}

> **MultipleActorScenarioEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata). |

### MultipleActorScenarioEntityData {#constructor-3}

> **MultipleActorScenarioEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata). |

### MultipleActorScenarioEntityData {#constructor-4}

> **MultipleActorScenarioEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata). |

### MultipleActorScenarioEntityData {#constructor-5}

> **MultipleActorScenarioEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata). |

### MultipleActorScenarioEntityData {#constructor-6}

> **MultipleActorScenarioEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata). |

## Properties

### {{% prop-heading "worldSpaceConnectTransform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "actor5Part" %}}

> **int**

### {{% prop-heading "scenarioAntRef" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "levelChoice" %}}

> **int**

### {{% prop-heading "scenarioChoice" %}}

> **int**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "actor6Part" %}}

> **int**

### {{% prop-heading "actor1" %}}

> **int**

### {{% prop-heading "actor1Part" %}}

> **int**

### {{% prop-heading "actor1SecondPart" %}}

> **int**

### {{% prop-heading "actor2" %}}

> **int**

### {{% prop-heading "actor2Part" %}}

> **int**

### {{% prop-heading "actor2SecondPart" %}}

> **int**

### {{% prop-heading "actor3" %}}

> **int**

### {{% prop-heading "actor3Part" %}}

> **int**

### {{% prop-heading "actor3SecondPart" %}}

> **int**

### {{% prop-heading "actor4" %}}

> **int**

### {{% prop-heading "actor4Part" %}}

> **int**

### {{% prop-heading "actor4SecondPart" %}}

> **int**

### {{% prop-heading "actor5" %}}

> **int**

### {{% prop-heading "actor5SecondPart" %}}

> **int**

### {{% prop-heading "actor6SecondPart" %}}

> **int**

### {{% prop-heading "actor6" %}}

> **int**

### {{% prop-heading "externalTime" %}}

> **float**

### {{% prop-heading "aligningEnabled" %}}

> **bool**

### {{% prop-heading "scenarioActive" %}}

> **bool**

### {{% prop-heading "actor1Prepared" %}}

> **bool**

### {{% prop-heading "actor2Prepared" %}}

> **bool**

### {{% prop-heading "actor3Prepared" %}}

> **bool**

### {{% prop-heading "actor4Prepared" %}}

> **bool**

### {{% prop-heading "actor5Prepared" %}}

> **bool**

### {{% prop-heading "actor6Prepared" %}}

> **bool**

### {{% prop-heading "checkActor1Finished" %}}

> **bool**

### {{% prop-heading "checkActor2Finished" %}}

> **bool**

### {{% prop-heading "checkActor3Finished" %}}

> **bool**

### {{% prop-heading "checkActor4Finished" %}}

> **bool**

### {{% prop-heading "checkActor5Finished" %}}

> **bool**

### {{% prop-heading "checkActor6Finished" %}}

> **bool**

### {{% prop-heading "useInputEventPlayerAsPlayer1" %}}

> **bool**

### {{% prop-heading "useExternalTime" %}}

> **bool**

### {{% prop-heading "worldSpace" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata) type.

