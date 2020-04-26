---
title: SequenceEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[SequenceEntityData](#constructor-0)**() |
| **[SequenceEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SequenceEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SequenceEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SequenceEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SequenceEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "events" >}} | [SequenceEventData](/vext/ref/fb/sequenceeventdata)[] |
| {{< prop "sequenceStartTime" >}} | int |
| {{< prop "sequenceLength" >}} | int |
| {{< prop "externalTime" >}} | float |
| {{< prop "propertyTracks" >}} | [PropertyTrackData](/vext/ref/fb/propertytrackdata)[] |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "serverUpdatePass" >}} | [UpdatePass](/vext/ref/fb/updatepass) |
| {{< prop "clientUpdatePass" >}} | [UpdatePass](/vext/ref/fb/updatepass) |
| {{< prop "customSequenceTracks" >}} | [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata)[] |
| {{< prop "autoPlayFirstFrame" >}} | bool |
| {{< prop "looping" >}} | bool |
| {{< prop "autoStart" >}} | bool |
| {{< prop "playInReverse" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SequenceEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SequenceEntityData {#constructor-0}

> **SequenceEntityData**()

Creates a new [SequenceEntityData](/vext/ref/fb/sequenceentitydata) frostbite instance.

### SequenceEntityData {#constructor-1}

> **SequenceEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SequenceEntityData](/vext/ref/fb/sequenceentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SequenceEntityData {#constructor-2}

> **SequenceEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SequenceEntityData](/vext/ref/fb/sequenceentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SequenceEntityData](/vext/ref/fb/sequenceentitydata). |

### SequenceEntityData {#constructor-3}

> **SequenceEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SequenceEntityData](/vext/ref/fb/sequenceentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SequenceEntityData](/vext/ref/fb/sequenceentitydata). |

### SequenceEntityData {#constructor-4}

> **SequenceEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SequenceEntityData](/vext/ref/fb/sequenceentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SequenceEntityData](/vext/ref/fb/sequenceentitydata). |

### SequenceEntityData {#constructor-5}

> **SequenceEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SequenceEntityData](/vext/ref/fb/sequenceentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SequenceEntityData](/vext/ref/fb/sequenceentitydata). |

## Properties

### {{% prop-heading "events" %}}

> **[SequenceEventData](/vext/ref/fb/sequenceeventdata)**[]

### {{% prop-heading "sequenceStartTime" %}}

> **int**

### {{% prop-heading "sequenceLength" %}}

> **int**

### {{% prop-heading "externalTime" %}}

> **float**

### {{% prop-heading "propertyTracks" %}}

> **[PropertyTrackData](/vext/ref/fb/propertytrackdata)**[]

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "serverUpdatePass" %}}

> **[UpdatePass](/vext/ref/fb/updatepass)**

### {{% prop-heading "clientUpdatePass" %}}

> **[UpdatePass](/vext/ref/fb/updatepass)**

### {{% prop-heading "customSequenceTracks" %}}

> **[CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata)**[]

### {{% prop-heading "autoPlayFirstFrame" %}}

> **bool**

### {{% prop-heading "looping" %}}

> **bool**

### {{% prop-heading "autoStart" %}}

> **bool**

### {{% prop-heading "playInReverse" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SequenceEntityData](/vext/ref/fb/sequenceentitydata) type.

