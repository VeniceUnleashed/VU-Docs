---
title: ChatSettings
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[ChatSettings](#constructor-0)**() |
| **[ChatSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ChatSettings](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[ChatSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "channels" >}} | [ChatChannelType](/vext/ref/fb/chatchanneltype)[] |
| {{< prop "antiSpam" >}} | [AntiSpamConfig](/vext/ref/fb/antispamconfig) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ChatSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ChatSettings {#constructor-0}

> **ChatSettings**()

Creates a new [ChatSettings](/vext/ref/fb/chatsettings) frostbite instance.

### ChatSettings {#constructor-1}

> **ChatSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ChatSettings](/vext/ref/fb/chatsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ChatSettings {#constructor-2}

> **ChatSettings**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [ChatSettings](/vext/ref/fb/chatsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [ChatSettings](/vext/ref/fb/chatsettings). |

### ChatSettings {#constructor-3}

> **ChatSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ChatSettings](/vext/ref/fb/chatsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ChatSettings](/vext/ref/fb/chatsettings). |

## Properties

### {{% prop-heading "channels" %}}

> **[ChatChannelType](/vext/ref/fb/chatchanneltype)**[]

### {{% prop-heading "antiSpam" %}}

> **[AntiSpamConfig](/vext/ref/fb/antispamconfig)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ChatSettings](/vext/ref/fb/chatsettings) type.

