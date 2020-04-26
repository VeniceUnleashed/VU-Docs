---
title: RandomDelayEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[RandomDelayEntityData](#constructor-0)**() |
| **[RandomDelayEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RandomDelayEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[RandomDelayEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[RandomDelayEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[RandomDelayEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minDelay" >}} | float |
| {{< prop "maxDelay" >}} | float |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "autoStart" >}} | bool |
| {{< prop "runOnce" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RandomDelayEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RandomDelayEntityData {#constructor-0}
> **RandomDelayEntityData**()

Creates a new [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata) frostbite instance.

### RandomDelayEntityData {#constructor-1}
> **RandomDelayEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RandomDelayEntityData {#constructor-2}
> **RandomDelayEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata). |

### RandomDelayEntityData {#constructor-3}
> **RandomDelayEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata). |

### RandomDelayEntityData {#constructor-4}
> **RandomDelayEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata). |

### RandomDelayEntityData {#constructor-5}
> **RandomDelayEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata). |

## Properties
### {{% prop-heading "minDelay" %}}
> **float**

### {{% prop-heading "maxDelay" %}}
> **float**

### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "autoStart" %}}
> **bool**

### {{% prop-heading "runOnce" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata) type.

