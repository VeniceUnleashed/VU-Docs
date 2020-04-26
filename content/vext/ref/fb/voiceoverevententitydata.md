---
title: VoiceOverEventEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverEventEntityData](#constructor-0)**() |
| **[VoiceOverEventEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverEventEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[VoiceOverEventEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VoiceOverEventEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VoiceOverEventEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "eventPlayer" >}} | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue) \| nil |
| {{< prop "voEvent" >}} | [VoiceOverEvent](/vext/ref/fb/voiceoverevent) \| nil |
| {{< prop "finishedDelay" >}} | float |
| {{< prop "extraEventPlayer" >}} | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue) \| nil |
| {{< prop "triggerDelay" >}} | float |
| {{< prop "runOnce" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverEventEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverEventEntityData {#constructor-0}

> **VoiceOverEventEntityData**()

Creates a new [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata) frostbite instance.

### VoiceOverEventEntityData {#constructor-1}

> **VoiceOverEventEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverEventEntityData {#constructor-2}

> **VoiceOverEventEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata). |

### VoiceOverEventEntityData {#constructor-3}

> **VoiceOverEventEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata). |

### VoiceOverEventEntityData {#constructor-4}

> **VoiceOverEventEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata). |

### VoiceOverEventEntityData {#constructor-5}

> **VoiceOverEventEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata). |

## Properties

### {{% prop-heading "eventPlayer" %}}

> **[VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue)** \| **nil**

### {{% prop-heading "voEvent" %}}

> **[VoiceOverEvent](/vext/ref/fb/voiceoverevent)** \| **nil**

### {{% prop-heading "finishedDelay" %}}

> **float**

### {{% prop-heading "extraEventPlayer" %}}

> **[VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue)** \| **nil**

### {{% prop-heading "triggerDelay" %}}

> **float**

### {{% prop-heading "runOnce" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata) type.

