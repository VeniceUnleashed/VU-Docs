---
title: MessageEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[MessageEntityData](#constructor-0)**() |
| **[MessageEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MessageEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[MessageEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[MessageEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[MessageEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "messageSid" >}} | string |
| {{< prop "additionalMessages" >}} | [MessageLineData](/vext/ref/fb/messagelinedata)[] |
| {{< prop "messageType" >}} | [UIMessageEntityType](/vext/ref/fb/uimessageentitytype) |
| {{< prop "displayTime" >}} | float |
| {{< prop "entryInputAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "enabled" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MessageEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MessageEntityData {#constructor-0}
> **MessageEntityData**()

Creates a new [MessageEntityData](/vext/ref/fb/messageentitydata) frostbite instance.

### MessageEntityData {#constructor-1}
> **MessageEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MessageEntityData](/vext/ref/fb/messageentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MessageEntityData {#constructor-2}
> **MessageEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [MessageEntityData](/vext/ref/fb/messageentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [MessageEntityData](/vext/ref/fb/messageentitydata). |

### MessageEntityData {#constructor-3}
> **MessageEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [MessageEntityData](/vext/ref/fb/messageentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [MessageEntityData](/vext/ref/fb/messageentitydata). |

### MessageEntityData {#constructor-4}
> **MessageEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [MessageEntityData](/vext/ref/fb/messageentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [MessageEntityData](/vext/ref/fb/messageentitydata). |

### MessageEntityData {#constructor-5}
> **MessageEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MessageEntityData](/vext/ref/fb/messageentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MessageEntityData](/vext/ref/fb/messageentitydata). |

## Properties
### {{% prop-heading "messageSid" %}}
> **string**

### {{% prop-heading "additionalMessages" %}}
> **[MessageLineData](/vext/ref/fb/messagelinedata)**[]

### {{% prop-heading "messageType" %}}
> **[UIMessageEntityType](/vext/ref/fb/uimessageentitytype)**

### {{% prop-heading "displayTime" %}}
> **float**

### {{% prop-heading "entryInputAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "enabled" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MessageEntityData](/vext/ref/fb/messageentitydata) type.

