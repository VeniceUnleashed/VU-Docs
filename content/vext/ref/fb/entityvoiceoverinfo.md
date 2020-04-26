---
title: EntityVoiceOverInfo
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[EntityVoiceOverInfo](#constructor-0)**() |
| **[EntityVoiceOverInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EntityVoiceOverInfo](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "voiceOverType" >}} | [VoiceOverObject](/vext/ref/fb/voiceoverobject) \| nil |
| {{< prop "labels" >}} | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EntityVoiceOverInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EntityVoiceOverInfo {#constructor-0}

> **EntityVoiceOverInfo**()

Creates a new [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo) frostbite instance.

### EntityVoiceOverInfo {#constructor-1}

> **EntityVoiceOverInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EntityVoiceOverInfo {#constructor-2}

> **EntityVoiceOverInfo**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo). |

## Properties

### {{% prop-heading "voiceOverType" %}}

> **[VoiceOverObject](/vext/ref/fb/voiceoverobject)** \| **nil**

### {{% prop-heading "labels" %}}

> **[VoiceOverLabel](/vext/ref/fb/voiceoverlabel)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo) type.

