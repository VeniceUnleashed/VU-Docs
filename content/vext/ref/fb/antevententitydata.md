---
title: AntEventEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[AntEventEntityData](#constructor-0)**() |
| **[AntEventEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AntEventEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[AntEventEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[AntEventEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[AntEventEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AntEventEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AntEventEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "onEnterEvents" >}} | [AntEventData](/vext/ref/fb/anteventdata)[] |
| {{< prop "onUpdateEvents" >}} | [AntEventData](/vext/ref/fb/anteventdata)[] |
| {{< prop "onLeaveEvents" >}} | [AntEventData](/vext/ref/fb/anteventdata)[] |
| {{< prop "sendAsPlayerEvent" >}} | bool |
| {{< prop "autoActivate" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AntEventEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AntEventEntityData {#constructor-0}
> **AntEventEntityData**()

Creates a new [AntEventEntityData](/vext/ref/fb/antevententitydata) frostbite instance.

### AntEventEntityData {#constructor-1}
> **AntEventEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AntEventEntityData](/vext/ref/fb/antevententitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AntEventEntityData {#constructor-2}
> **AntEventEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [AntEventEntityData](/vext/ref/fb/antevententitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [AntEventEntityData](/vext/ref/fb/antevententitydata). |

### AntEventEntityData {#constructor-3}
> **AntEventEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [AntEventEntityData](/vext/ref/fb/antevententitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [AntEventEntityData](/vext/ref/fb/antevententitydata). |

### AntEventEntityData {#constructor-4}
> **AntEventEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [AntEventEntityData](/vext/ref/fb/antevententitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [AntEventEntityData](/vext/ref/fb/antevententitydata). |

### AntEventEntityData {#constructor-5}
> **AntEventEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AntEventEntityData](/vext/ref/fb/antevententitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AntEventEntityData](/vext/ref/fb/antevententitydata). |

### AntEventEntityData {#constructor-6}
> **AntEventEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AntEventEntityData](/vext/ref/fb/antevententitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AntEventEntityData](/vext/ref/fb/antevententitydata). |

### AntEventEntityData {#constructor-7}
> **AntEventEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntEventEntityData](/vext/ref/fb/antevententitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AntEventEntityData](/vext/ref/fb/antevententitydata). |

## Properties
### {{% prop-heading "onEnterEvents" %}}
> **[AntEventData](/vext/ref/fb/anteventdata)**[]

### {{% prop-heading "onUpdateEvents" %}}
> **[AntEventData](/vext/ref/fb/anteventdata)**[]

### {{% prop-heading "onLeaveEvents" %}}
> **[AntEventData](/vext/ref/fb/anteventdata)**[]

### {{% prop-heading "sendAsPlayerEvent" %}}
> **bool**

### {{% prop-heading "autoActivate" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AntEventEntityData](/vext/ref/fb/antevententitydata) type.

