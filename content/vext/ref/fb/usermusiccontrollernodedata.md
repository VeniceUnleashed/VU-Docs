---
title: UserMusicControllerNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[UserMusicControllerNodeData](#constructor-0)**() |
| **[UserMusicControllerNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UserMusicControllerNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[UserMusicControllerNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "override" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "restore" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "restoreOnDeactivated" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UserMusicControllerNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UserMusicControllerNodeData {#constructor-0}

> **UserMusicControllerNodeData**()

Creates a new [UserMusicControllerNodeData](/vext/ref/fb/usermusiccontrollernodedata) frostbite instance.

### UserMusicControllerNodeData {#constructor-1}

> **UserMusicControllerNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UserMusicControllerNodeData](/vext/ref/fb/usermusiccontrollernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UserMusicControllerNodeData {#constructor-2}

> **UserMusicControllerNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [UserMusicControllerNodeData](/vext/ref/fb/usermusiccontrollernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [UserMusicControllerNodeData](/vext/ref/fb/usermusiccontrollernodedata). |

### UserMusicControllerNodeData {#constructor-3}

> **UserMusicControllerNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UserMusicControllerNodeData](/vext/ref/fb/usermusiccontrollernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UserMusicControllerNodeData](/vext/ref/fb/usermusiccontrollernodedata). |

## Properties

### {{% prop-heading "override" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "restore" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "restoreOnDeactivated" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UserMusicControllerNodeData](/vext/ref/fb/usermusiccontrollernodedata) type.

