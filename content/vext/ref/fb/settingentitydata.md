---
title: SettingEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[SettingEntityData](#constructor-0)**() |
| **[SettingEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SettingEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SettingEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SettingEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SettingEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "boolSettingName" >}} | string |
| {{< prop "intSettingName" >}} | string |
| {{< prop "floatSettingName" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SettingEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SettingEntityData {#constructor-0}
> **SettingEntityData**()

Creates a new [SettingEntityData](/vext/ref/fb/settingentitydata) frostbite instance.

### SettingEntityData {#constructor-1}
> **SettingEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SettingEntityData](/vext/ref/fb/settingentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SettingEntityData {#constructor-2}
> **SettingEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SettingEntityData](/vext/ref/fb/settingentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SettingEntityData](/vext/ref/fb/settingentitydata). |

### SettingEntityData {#constructor-3}
> **SettingEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SettingEntityData](/vext/ref/fb/settingentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SettingEntityData](/vext/ref/fb/settingentitydata). |

### SettingEntityData {#constructor-4}
> **SettingEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SettingEntityData](/vext/ref/fb/settingentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SettingEntityData](/vext/ref/fb/settingentitydata). |

### SettingEntityData {#constructor-5}
> **SettingEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SettingEntityData](/vext/ref/fb/settingentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SettingEntityData](/vext/ref/fb/settingentitydata). |

## Properties
### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "boolSettingName" %}}
> **string**

### {{% prop-heading "intSettingName" %}}
> **string**

### {{% prop-heading "floatSettingName" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SettingEntityData](/vext/ref/fb/settingentitydata) type.

