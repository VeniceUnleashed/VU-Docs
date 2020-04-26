---
title: DelayEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[DelayEntityData](#constructor-0)**() |
| **[DelayEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DelayEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[DelayEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DelayEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DelayEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "delay" >}} | float |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "autoStart" >}} | bool |
| {{< prop "runOnce" >}} | bool |
| {{< prop "removeDuplicateEvents" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DelayEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DelayEntityData {#constructor-0}
> **DelayEntityData**()

Creates a new [DelayEntityData](/vext/ref/fb/delayentitydata) frostbite instance.

### DelayEntityData {#constructor-1}
> **DelayEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DelayEntityData](/vext/ref/fb/delayentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DelayEntityData {#constructor-2}
> **DelayEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [DelayEntityData](/vext/ref/fb/delayentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [DelayEntityData](/vext/ref/fb/delayentitydata). |

### DelayEntityData {#constructor-3}
> **DelayEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DelayEntityData](/vext/ref/fb/delayentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DelayEntityData](/vext/ref/fb/delayentitydata). |

### DelayEntityData {#constructor-4}
> **DelayEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DelayEntityData](/vext/ref/fb/delayentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DelayEntityData](/vext/ref/fb/delayentitydata). |

### DelayEntityData {#constructor-5}
> **DelayEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DelayEntityData](/vext/ref/fb/delayentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DelayEntityData](/vext/ref/fb/delayentitydata). |

## Properties
### {{% prop-heading "delay" %}}
> **float**

### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "autoStart" %}}
> **bool**

### {{% prop-heading "runOnce" %}}
> **bool**

### {{% prop-heading "removeDuplicateEvents" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DelayEntityData](/vext/ref/fb/delayentitydata) type.

