---
title: ClimbLadderComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[ClimbLadderComponentData](#constructor-0)**() |
| **[ClimbLadderComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ClimbLadderComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[ClimbLadderComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ClimbLadderComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ClimbLadderComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "climbPhase" >}} | int |
| {{< prop "connectPhase" >}} | int |
| {{< prop "connectJointDisplacement" >}} | float |
| {{< prop "binding" >}} | [ClimbLadderBinding](/vext/ref/fb/climbladderbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ClimbLadderComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ClimbLadderComponentData {#constructor-0}

> **ClimbLadderComponentData**()

Creates a new [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata) frostbite instance.

### ClimbLadderComponentData {#constructor-1}

> **ClimbLadderComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ClimbLadderComponentData {#constructor-2}

> **ClimbLadderComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata). |

### ClimbLadderComponentData {#constructor-3}

> **ClimbLadderComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata). |

### ClimbLadderComponentData {#constructor-4}

> **ClimbLadderComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata). |

### ClimbLadderComponentData {#constructor-5}

> **ClimbLadderComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata). |

## Properties

### {{% prop-heading "climbPhase" %}}

> **int**

### {{% prop-heading "connectPhase" %}}

> **int**

### {{% prop-heading "connectJointDisplacement" %}}

> **float**

### {{% prop-heading "binding" %}}

> **[ClimbLadderBinding](/vext/ref/fb/climbladderbinding)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata) type.

