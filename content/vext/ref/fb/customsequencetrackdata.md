---
title: CustomSequenceTrackData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[CustomSequenceTrackData](#constructor-0)**() |
| **[CustomSequenceTrackData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CustomSequenceTrackData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[CustomSequenceTrackData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CustomSequenceTrackData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CustomSequenceTrackData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "trackName" >}} | string |
| {{< prop "inputLinkMap" >}} | [CustomSequenceTrackLinkMapping](/vext/ref/fb/customsequencetracklinkmapping)[] |
| {{< prop "outputLinkMap" >}} | [CustomSequenceTrackLinkMapping](/vext/ref/fb/customsequencetracklinkmapping)[] |
| {{< prop "eventMap" >}} | [CustomSequenceTrackEventMapping](/vext/ref/fb/customsequencetrackeventmapping)[] |
| {{< prop "sourcePropertyMap" >}} | [CustomSequenceTrackPropertyMapping](/vext/ref/fb/customsequencetrackpropertymapping)[] |
| {{< prop "targetPropertyMap" >}} | [CustomSequenceTrackPropertyMapping](/vext/ref/fb/customsequencetrackpropertymapping)[] |
| {{< prop "sourceAndTargetPropertyMap" >}} | [CustomSequenceTrackPropertyMapping](/vext/ref/fb/customsequencetrackpropertymapping)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CustomSequenceTrackData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CustomSequenceTrackData {#constructor-0}

> **CustomSequenceTrackData**()

Creates a new [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata) frostbite instance.

### CustomSequenceTrackData {#constructor-1}

> **CustomSequenceTrackData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CustomSequenceTrackData {#constructor-2}

> **CustomSequenceTrackData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata). |

### CustomSequenceTrackData {#constructor-3}

> **CustomSequenceTrackData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata). |

### CustomSequenceTrackData {#constructor-4}

> **CustomSequenceTrackData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata). |

### CustomSequenceTrackData {#constructor-5}

> **CustomSequenceTrackData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata). |

## Properties

### {{% prop-heading "trackName" %}}

> **string**

### {{% prop-heading "inputLinkMap" %}}

> **[CustomSequenceTrackLinkMapping](/vext/ref/fb/customsequencetracklinkmapping)**[]

### {{% prop-heading "outputLinkMap" %}}

> **[CustomSequenceTrackLinkMapping](/vext/ref/fb/customsequencetracklinkmapping)**[]

### {{% prop-heading "eventMap" %}}

> **[CustomSequenceTrackEventMapping](/vext/ref/fb/customsequencetrackeventmapping)**[]

### {{% prop-heading "sourcePropertyMap" %}}

> **[CustomSequenceTrackPropertyMapping](/vext/ref/fb/customsequencetrackpropertymapping)**[]

### {{% prop-heading "targetPropertyMap" %}}

> **[CustomSequenceTrackPropertyMapping](/vext/ref/fb/customsequencetrackpropertymapping)**[]

### {{% prop-heading "sourceAndTargetPropertyMap" %}}

> **[CustomSequenceTrackPropertyMapping](/vext/ref/fb/customsequencetrackpropertymapping)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata) type.

